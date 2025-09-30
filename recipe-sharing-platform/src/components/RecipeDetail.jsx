import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const found = recipesData.find((r) => r.id === parseInt(id));
        setRecipe(found);
    }, [id]);

    if (!recipe) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-amber-50">
                <p className='text-lg text-gray-700'>Loading Recipe...</p>
            </div>
        )
    }

    return (
        <main className='min-h-screen bg-amber-50 py-8 px-4'>
            <div className='max-w-4xl mx-auto'>
                <a href="/" className='inline-block mb-6 text-orange-600 hover:text-orange-800 font-medium'>← Back to Recipes</a>

                <header className='mb-8'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>{recipe.title}</h1>
                    <p className='text-lg text-gray-600'>{recipe.summary}</p>
                </header>

                <div className='mb-8 rounded-xl overflow-hidden shadow-lg'>
                    <img src={recipe.image} alt={recipe.title} className='w-full h-auto object-cover' />
                </div>

                {/* Two-column layout: Ingredients + Instructions */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <section className='bg-white p-6 rounded-xl shadow'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Ingredients</h2>
                        <ul className='space-y-2 pl-2'>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className='text-orange-500 mr-2 mt-0.5'>•</span>
                                    <span className='text-gray-700'>{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Instructions */}

                    <section className='bg-white p-6 rounded-xl shadow'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Instructions</h2>
                        <ol className='space-y-3 pl-1'>
                            {recipe.instructions.map((step, index) => (
                                 <li key={index} className='flex'>
                                    <span className='font-bold text-orange-600 mr-3 flex-shrink-0 mt-0.5'>{index + 1}.</span>
                                    <span className='text-gray-700 leading-relaxed'>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default RecipeDetail;