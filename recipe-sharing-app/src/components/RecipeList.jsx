// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (recipes.length === 0) {
    return <p className="text-gray-500">No recipes yet. Add one!</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded-lg bg-white shadow">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <p className="text-gray-600 mt-2">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;