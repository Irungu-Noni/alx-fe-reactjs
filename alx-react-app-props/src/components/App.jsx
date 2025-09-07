import UserContext from './UserContext';
// import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </UserContext.Provider> 
  );
}

export default App;

// return (
//     <UserContext.Provider value={userData}>
//       <ProfilePage />
//     </UserContext.Provider> 
//   );