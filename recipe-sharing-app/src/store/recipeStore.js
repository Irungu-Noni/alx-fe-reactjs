// src/store/useRecipeStore.js
import { create } from 'zustand'

const recipeStore = create((set) => ({
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
  setRecipes: (recipes) => set({ recipes }),
}));

export default recipeStore;