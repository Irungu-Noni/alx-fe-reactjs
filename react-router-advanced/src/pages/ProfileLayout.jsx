import { Outlet, Link } from 'react-router-dom';

function ProfileLayout() {
  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <nav style={{ width: '200px', marginRight: '20px' }}>
        <h3>My Profile</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="">Details</Link></li> {/* renders at /profile */}
          <li><Link to="settings">Settings</Link></li>
        </ul>
        <button onClick={() => {
          // We'll add logout later
        }}>Logout</button>
      </nav>
      <main style={{ flex: 1 }}>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

export default ProfileLayout;