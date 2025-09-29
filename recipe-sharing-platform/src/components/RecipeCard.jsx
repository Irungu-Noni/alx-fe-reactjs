function RecipeCard({ recipe }) {
    return (
        <a href={`/recipes/&{recipe.id}`}
        className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-48 overflow-hidden">
                <img src={recipe.iamge} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{recipe.summary}</p>
            </div>
        </a>
    );
}

export default RecipeCard;