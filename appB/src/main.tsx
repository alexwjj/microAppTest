import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import microApp from '@micro-zoe/micro-app';

microApp.start({
  iframe: true,
  // tagName: 'micro-app-sub',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
