import { useNavigate } from 'react-router-dom';
import { login } from '../authenticator';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile', { replace: true });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🔑 Login</h2>
      <button onClick={handleLogin}>Log In (Fake)</button>
    </div>
  );
}

export default Login;