// src/App.jsx
import { Routes, Route, Router } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {

  return (
    <Router>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Recipe Sharing App</h1>

        <FavoritesList />
        <RecommendationsList />

        <SearchBar />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe Details Route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;