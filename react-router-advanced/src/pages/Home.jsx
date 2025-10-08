import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🏠 Home (Public)</h1>
      <p><Link to="/profile">Go to My Profile</Link> (requires login)</p>
      <p><Link to="/profile/5">View User 5's Profile</Link></p>
      <p><Link to="/login">Login</Link></p>
    </div>
  );
}

export default Home;