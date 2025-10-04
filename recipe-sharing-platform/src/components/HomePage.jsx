import { useState, useEffect } from "react";
import recipeData from '../data.json';
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipeData);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Finger-Licking Recipes</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover, cook, and share your favorite dishes from around the world</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />))}
                </div>
            </div>
        </main>
    );
};

const RecipeCard = ({ recipe }) => {
    return (
        <a
            href={`/recipe/${recipe.id}`}
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden 
                      hover:shadow-2xl hover:scale-[1.03] 
                      transition-all duration-300 ease-in-out 
                      h-full flex flex-col border border-gray-100">
                <div className="overflow-hidden rounded-t-xl">
                    <img 
                        src={recipe.image.trim()} 
                        alt={recipe.title} 
                        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{recipe.title}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-hidden">{recipe.summary}</p>
                        <div className="mt-4">
                            <span className="text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors">View Recipe</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default HomePage;