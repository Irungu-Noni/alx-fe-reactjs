// src/components/RecommendationsList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) {
    return null; // Don't show if no recommendations
  }

  return (
    <div className="bg-purple-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">🌟 Recommended For You</h2>
      <div className="space-y-4">
        {recommendations.map((recipe) => (
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

export default RecommendationsList;