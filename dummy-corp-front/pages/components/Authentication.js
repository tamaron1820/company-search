// components/Authentication.js
import React, { useContext } from "react";
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const Authentication = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { /* Your auth info here */ });
      dispatch({ type: 'LOGIN', payload: response.data.user });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      {state.isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Authentication;
