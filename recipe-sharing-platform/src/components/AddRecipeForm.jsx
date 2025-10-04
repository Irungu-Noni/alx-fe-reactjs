// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Basic validation helper
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Please list at least one ingredient';
    } else {
      const ingredientLines = formData.ingredients
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
      if (ingredientLines.length < 1) {
        newErrors.ingredients = 'Please list at least one ingredient';
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else {
      const stepLines = formData.steps
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
      if (stepLines.length < 1) {
        newErrors.steps = 'Please include at least one step';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // ✅ Simulate saving (in real app: POST to API)
    console.log('New recipe submitted:', {
      ...formData,
      id: Date.now(), // temporary ID
    });

    // 🎉 Show success message or redirect
    alert('Recipe added successfully!');
    navigate('/'); // Go back to home
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Add a New Recipe</h1>
          <p className="mt-2 text-gray-600">
            Share your favorite dish with the community!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="e.g., Creamy Mushroom Risotto"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ingredients *
              </label>
              <p className="text-xs text-gray-500 mb-2">
                List one ingredient per line
              </p>
              <textarea
                id="ingredients"
                name="ingredients"
                rows="5"
                value={formData.ingredients}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="2 cups Arborio rice&#10;1 liter vegetable stock&#10;1 onion, finely chopped&#10;..."
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.ingredients}
                </p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label
                htmlFor="steps"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preparation Steps *
              </label>
              <p className="text-xs text-gray-500 mb-2">
                List one step per line
              </p>
              <textarea
                id="steps"
                name="steps"
                rows="6"
                value={formData.steps}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="1. Heat stock in a saucepan...&#10;2. Sauté onion in olive oil...&#10;..."
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${
                  isSubmitting
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } shadow-md hover:shadow-lg`}
              >
                {isSubmitting ? 'Adding Recipe...' : 'Add Recipe'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;