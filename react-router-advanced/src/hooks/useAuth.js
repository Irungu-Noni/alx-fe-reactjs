import { getIsAuthenticator } from '../authenticator';

export const useAuth = () => {
  return {
    isAuthenticated: getIsAuthenticator()
  };
};
