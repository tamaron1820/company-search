import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.baseURL = 'http://localhost:3001';
      const response = await axios.post('/api/register', {
        user: {
          email,
          password,
          role,
        },
      });
      router.push('/');
      alert('Registration successful. Please login.')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>アカウント作成</h1>
        <label htmlFor="email">メールアドレス:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="password">パスワード:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div>
        <label htmlFor="role">ロール:</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">登録</button>
    </form>
  );
};

export default RegisterForm;
