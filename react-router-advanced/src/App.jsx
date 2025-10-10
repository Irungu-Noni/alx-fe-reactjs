// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
// import ProfileLayout from './pages/ProfileLayout';
// import ProfileDetails from './pages/ProfileDetails';
// import ProfileSettings from './pages/ProfileSettings';
import UserProfile from './pages/UserProfile';
import Profile from './components/Profile';
import BlogPost from './pages/BlogPost';
import ProtectionRoute from './components/ProtectionRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/blog/:id" /> {/* Dynamic */}

        {/* Protected nested routes */}
        <Route
          path="/profile"
          element={
            <ProtectionRoute>
              <Profile />
            </ProtectionRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;