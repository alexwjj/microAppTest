import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import subMicroApp from '@micro-zoe/micro-app';

subMicroApp.start({
  tagName: 'micro-app-sub',
  iframe: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
