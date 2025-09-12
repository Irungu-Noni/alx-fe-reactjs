// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Recipe Sharing App</h1>

      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;