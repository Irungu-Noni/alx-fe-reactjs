let isAuthenticator = false;

export const login = () => {
  isAuthenticator = true;
  console.log("User is logged in");
};

export const logout = () => {
  isAuthenticator = false;
  console.log("User is logged out");
};

export const getIsAuthenticator = () => isAuthenticator;