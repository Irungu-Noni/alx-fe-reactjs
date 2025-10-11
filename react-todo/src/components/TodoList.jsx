import React from "react";
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ]);

  const [inputValue, setInputValue] = useState('');

  const addNewTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  
  const toggleNewTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeNewTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
        
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>My Todo List</h1>

      <form onSubmit={addNewTodo} style={{ marginBottom: '20px' }}>
        <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Add a new todo"
            style={{ padding: '10px', width: '70%' }}
        />
        <button type='submit' style={{ padding: '8px' }}>Add New Todo Task</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo => (
          <li key={todo.id}
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            margin: '8px 0',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            textDecoration: todo.completed ? 'line-through' : 'none',
            opacity: todo.completed ? 0.6 : 1,
          }}>
            <span onClick={() => toggleNewTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => removeNewTodo(todo.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>❌</button>
          </li>
        )))}
      </ul>
    </div>
  );
}

export default TodoList;