// src/components/FavoritesList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    ).filter(Boolean) // Remove nulls (if recipe was deleted)
  );

  if (favorites.length === 0) {
    return <p className="text-gray-500">No favorites yet. ❤️ Add some!</p>;
  }

  return (
    <div className="bg-yellow-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">❤️ My Favorites</h2>
      <div className="space-y-4">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded bg-white">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;