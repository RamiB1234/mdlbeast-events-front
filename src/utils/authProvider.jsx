import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [userName, setUserName] = useState(localStorage.getItem('userName')); // Store user name

  const login = (token, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userName', name); // Save user name in local storage
    setAuthToken(token);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); // Remove user name from local storage
    setAuthToken(null);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);