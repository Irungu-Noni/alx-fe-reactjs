// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // ✅ Existing state
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // 🆕 NEW: Favorites (array of recipe IDs)
  favorites: [],

  // 🆕 NEW: Action to add a recipe to favorites
  addFavorite: (recipeId) => {
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    }));
    get().generateRecommendations(); // Re-generate recommendations
  },

  // 🆕 NEW: Action to remove a recipe from favorites
  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations(); // Re-generate recommendations
  },

  // 🆕 NEW: Recommendations (computed list)
  recommendations: [],

  // 🆕 NEW: Action to generate recommendations (mock logic)
  generateRecommendations: () =>
    set((state) => {
      // Mock: recommend recipes that are favorited OR have "chocolate", "cheese", "spicy" in title
      const keywords = ["chocolate", "cheese", "spicy", "easy", "quick"];
      const recommended = state.recipes.filter((recipe) => {
        // Either favorited...
        if (state.favorites.includes(recipe.id)) return true;
        // ...or matches a keyword
        return keywords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        );
      });

      // Shuffle and take top 3 (for variety)
      return {
        recommendations: recommended
          .sort(() => 0.5 - Math.random())
          .slice(0, 3),
      };
    }),

  // ✅ Existing actions (updated to re-generate recommendations)
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) => {
    if (!newRecipe.title?.trim()) return;
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, title: newRecipe.title.trim() }],
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate after adding
  },

  updateRecipe: (id, updatedRecipe) => {
    if (!updatedRecipe.title?.trim()) return;
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, ...updatedRecipe, title: updatedRecipe.title.trim() }
          : recipe
      ),
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate after updating
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate after deleting
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations(); // Re-generate after setting
  },
}));

export default useRecipeStore;