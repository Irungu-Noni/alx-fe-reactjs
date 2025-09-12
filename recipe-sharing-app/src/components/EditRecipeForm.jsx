// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded">
      <h3 className="font-semibold mb-2">Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows="3"
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;