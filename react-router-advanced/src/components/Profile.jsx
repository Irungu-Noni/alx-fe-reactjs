// src/components/Profile.jsx
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from '../pages/ProfileDetails';
import ProfileSettings from '../pages/ProfileSettings';

// This component may be used as a layout or wrapper.
// For now, it just renders nested routes via Outlet.
function Profile() {
  return (
    <Routes>
      <Route index element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
  );
}

export default Profile;