import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.baseURL = 'http://localhost:3001';
      const response = await axios.post('/api/login', {
        session: {
          email,
          password,
        },
      });
      router.push('/home');
      localStorage.setItem('user', JSON.stringify(response.data));
      const user = JSON.parse(localStorage.getItem('user'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <h1>ログイン</h1>
          <label htmlFor="email">メールアドレス:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit" >ログイン</button>
      </form>
      <Link href="/components/registration">
        新規登録
      </Link>


    </div>
  );
};

export default LoginForm;
