// src/components/RecipeList.jsx
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No filteredRecipes yet. Add one!</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded-lg bg-white shadow">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <p className="text-gray-600 mt-2">{recipe.description}</p>
            <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
            >
                View Details
            </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;