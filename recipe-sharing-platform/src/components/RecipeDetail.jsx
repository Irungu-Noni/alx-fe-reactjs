import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';
// import { Link } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const found = recipesData.find((r) => r.id === parseInt(id));
        setRecipe(found);
    }, [id]);

    if (!recipe) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <p className='text-lg text-gray-700'>Loading Recipe...</p>
            </div>
        )
    }

    return (
    //     <Link to={`/recipe/${recipe.id}`} className="block">
    //         <div>
    //             <img 
    //                 src={recipe.image.trim()}
    //                 alt={recipe.title}
    //                 className='w-full h-48 object-cover'
    //             />
    //             <div className='p-5'>
    //                 <h2 className='text-xl font-bold text-gray-800 mb-2'>{recipe.title}</h2>
    //                 <p className='text-gray-600'>{recipe.summary}</p>
    //             </div>
    //         </div>
    //     </Link>
    // );
        <main className='min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4'>
            <div className='max-w-4xl mx-auto'>
                <a href="/" className='inline-block mb-6 text-orange-600 hover:text-orange-800 font-medium'>← Back to Recipes</a>

                <header className='mb-8 text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>{recipe.title}</h1>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto md:mx-0'>{recipe.summary}</p>
                </header>

                <div className='mb-10 rounded-2xl overflow-hidden shadow-xl'>
                    <img src={recipe.image} alt={recipe.title} className='w-full h-auto object-cover' />
                </div>

                {/* Two-column layout: Ingredients + Instructions */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <section className='bg-white p-6 rounded-xl shadow-md'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'><span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2">✓</span>Ingredients</h2>
                        <ul className='space-y-2 pl-2'>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className='text-orange-500 mt-1 mr-2'>•</span>
                                    <span className='text-gray-700'>{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Instructions */}

                    <section className='bg-white p-6 rounded-xl shadow-md'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'><span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">1</span>Instructions</h2>
                        <ol className='space-y-4 pl-1'>
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