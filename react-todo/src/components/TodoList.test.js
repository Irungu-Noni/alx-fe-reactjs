import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  
  render(<TodoList />);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();

  // const completedTasks = screen.getByText('Build a Todo App');
  // expect(completedTasks.closest('li')).toHaveStyle('text-decoration: line-through'); // Only one todo is completed initially
  expect(screen.getByText('Build a Todo App').closest('li')).toHaveStyle('text-decoration: line-through');
});

test("adds a new todo item", () => {
  render(<TodoList />);

  const inputElement = screen.getByPlaceholderText('Add a new todo');
  const buttonElement = screen.getByText('Add New Todo Task');

  fireEvent.change(inputElement, { target: { value: 'Write tests' } });
  fireEvent.click(buttonElement);

  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

test("toggles todo completion status", () => {
  render(<TodoList />);

  const todo = screen.getByText('Learn React');
  const item = todo.closest('li');

  expect(item).not.toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(item).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(item).not.toHaveStyle('text-decoration: line-through');

  // const todoItem = screen.getByText('Learn React').closest('li');

  // expect(todoItem).not.toHaveStyle('text-decoration: line-through');

  // fireEvent.click(screen.getByText('Learn React'));
  // expect(todoItem).not.toHaveStyle('text-decoration: none');
    
  // fireEvent.click(screen.getByText('Learn React'));
  // expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test("removes a todo item", () => {
  render(<TodoList />);

  const removeButton = screen.getAllByText('❌')[0];
    
  fireEvent.click(removeButton);
    
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});