import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [instructions, setInstructions] = useState([""]);

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset Errors
        setErrors({});

        // Validation
        let isValid = true;
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Title is required";
            isValid = false;
        }

        const ingredientsList = ingredients
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean);
        
        if (ingredientsList.length < 2) {
            newErrors.ingredients = "Please list at least 2 ingredients (one per line)";
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        // Valid! Log or send to backend
        const newRecipe = {
            id: Date.now(),
            title: title.trim(),
            summary: 'A user-submitted recipe.',
            image: 'https://via.placeholder.com/150',
            ingredients: ingredientsList,
            instructions: instructions
                .split('\n')
                .map((step) => step.trim())
                .filter(Boolean),
        }

        console.log('New Recipe Submitted:', newRecipe);
        alert('Recipe subitted successfully! (Check console)');

        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Add a New Recipe
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title *</label>
                    <input 
                        type="text"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2-orange-500 focus:border-transparent ${errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                        placeholder="e.g., Spaghetti Carbonara" />
                         {errors.title && (
                            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                         )}
                </div>

                <div>
                    <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
                        Ingredients * <span className="text-gray-500">(one per line)</span>
                    </label>
                    <textarea
                        id="ingredients"
                        onChange={(event) => setIngredients(event.target.value)}
                        rows="5"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono ${errors.ingredients ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                        placeholder="Flour&#10;Eggs&#10;Milk" 
                    />
                    {errors.ingredients && (
                        <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="instructions">Preparation Steps *</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(event) => setInstructions(event.target.value)}
                        rows="6"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.instructions ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                        placeholder="1. Mix dry ingredients&#10;2. Add wet ingredients&#10;3. Bake for 30 minutes" 
                    />
                    {errors.instructions && (
                        <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
                    )}
                </div>

                <button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg">
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;