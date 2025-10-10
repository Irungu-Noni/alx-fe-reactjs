// src/components/Profile.jsx
import { Outlet } from 'react-router-dom';

// This component may be used as a layout or wrapper.
// For now, it just renders nested routes via Outlet.
function Profile() {
  return <Outlet />;
}

export default Profile;