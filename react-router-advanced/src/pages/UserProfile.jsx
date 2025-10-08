import { useParams } from 'react-router-dom';

// Fake user data (in real app, fetch from API)
const users = {
  1: { name: 'Alice' },
  2: { name: 'Bob' },
  3: { name: 'Charlie' },
  4: { name: 'Dana' },
  5: { name: 'Elvis' },
};

export default function UserProfile() {
  const { id } = useParams(); // Get :id from URL
  const user = users[id];

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>👥 Public Profile: {user.name}</h2>
      <p>User ID: {id}</p>
      <p>This page is **public** — no login required!</p>
    </div>
  );
}