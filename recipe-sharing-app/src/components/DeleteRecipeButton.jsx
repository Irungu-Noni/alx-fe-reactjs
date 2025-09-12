// src/components/DeleteRecipeButton.jsx
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'; // To go back after delete

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/"); // Go back to home
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;