// src/components/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  
  const isFavorite = useRecipeStore((state) => state.favorites.includes(recipe.id));
  
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return <div className="p-6 text-center">Recipe not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      <div className="space-y-4 mt-6">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />

        <button
          onClick={() =>
            isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
          }
          className={`w-full py-2 rounded font-medium ${ isFavorite
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-gray-300 text-gray-hover:bg-gray-400'
        }`}
        >
            {isFavorite ? ' 💔 Remove from Favorites' : '❤️Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;