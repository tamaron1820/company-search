import React, { useState } from 'react';
import '../styles/globals.css';
import LoginForm from '.';
import Home from './home';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
