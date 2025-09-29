import { useState, useEffect } from "react";
import RecipeCard from './RecipeCard';
import recipesData from '../data.json';

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <main className="min-h-scrren bg-gradient-to-b from-amber-50 to-orange-50 py-8 px-4">
            <div className="max-w7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Finger-Licking Recipes</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover, cook, and share your favorite dishes from around the world</p>
                </header>

                <div>{recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />))}
                </div>
            </div>
        </main>
    )
}

export default HomePage;