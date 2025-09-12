// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // ✅ Existing state
  recipes: [],

  // 🆕 NEW: Search term
  searchTerm: '',

  // 🆕 NEW: Action to update search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Auto-filter when search term changes
    get().filterRecipes();
  },

  // 🆕 NEW: Filtered recipes (computed)
  filteredRecipes: [],

  // 🆕 NEW: Action to compute filtered recipes
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ✅ Existing actions
  addRecipe: (newRecipe) => {
    if (!newRecipe.title?.trim()) return;
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, title: newRecipe.title.trim() }],
    }));
    get().filterRecipes(); // Re-filter after adding
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
    get().filterRecipes(); // Re-filter after updating
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
    get().filterRecipes(); // Re-filter after deleting
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Re-filter after setting
  },
}));

export default useRecipeStore;