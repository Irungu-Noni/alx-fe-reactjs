// src/components/AddRecipeForm.jsx
import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientLines = ingredients
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '');
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'At least two ingredients are required';
      }
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log({ title, ingredients, steps });
      // In a real app, you'd send this to an API
      alert('Recipe submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Add New Recipe
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
                Ingredients
              </label>
              <textarea
                id="ingredients"
                rows="4"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter one ingredient per line"
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
                Preparation Steps
              </label>
              <textarea
                id="steps"
                rows="5"
                value={steps}
                onChange={(event) => setSteps(event.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Describe each step clearly"
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Submit Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;