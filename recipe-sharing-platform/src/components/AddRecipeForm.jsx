// src/components/AddRecipeForm.jsx
import { useState } from 'react';

export default function AddRecipeForm() {
  // Form state
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Validation & error state
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setErrors({});

    // Validation
    let isValid = true;
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    const ingredientsList = ingredients
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean); // Remove empty lines

    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please list at least 2 ingredients (one per line)';
      isValid = false;
    }

    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // ✅ Valid! Log or send to backend
    const newRecipe = {
      id: Date.now(), // temporary ID
      title: title.trim(),
      summary: 'A user-submitted recipe.',
      image: 'https://via.placeholder.com/150',
      ingredients: ingredientsList,
      instructions: instructions
        .split('\n')
        .map((step) => step.trim())
        .filter(Boolean),
    };

    console.log('New Recipe Submitted:', newRecipe);
    alert('Recipe submitted successfully! (Check console)');

    // Optional: Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
              errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="e.g., Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
            Ingredients * <span className="text-gray-500">(one per line)</span>
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono ${
              errors.ingredients ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Flour&#10;Eggs&#10;Milk"
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
            Preparation Steps *
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            rows="6"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
              errors.instructions ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="1. Mix dry ingredients&#10;2. Add wet ingredients&#10;3. Bake for 30 minutes"
          />
          {errors.instructions && (
            <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}