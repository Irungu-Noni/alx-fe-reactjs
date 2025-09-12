// src/store/recipeStore.js
import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  // State: array of recipes
  recipes: [],

  // Action: Add a new recipe
  addRecipe: (newRecipe) => {
    // 🛡️ GUARD: Don't allow empty title
    if (!newRecipe.title?.trim()) return;
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, title: newRecipe.title.trim() }],
    }));
  },

  // Action: Initialize recipes (e.g., load sample data)

updateRecipe: (id, updatedRecipe) => {
    if (!updatedRecipe.title?.trim()) return; // 🛡️ GUARD: Don't allow empty title
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe, title: updatedRecipe.title.trim() } : recipe
      ),
    }));
  },

deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
},

setRecipes: (recipes) => set({ recipes }),

}));

export default useRecipeStore;