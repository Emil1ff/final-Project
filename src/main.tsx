// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './assets/companents/store/store';
import './index.css'


const container = document.getElementById('root');

if (container) {
  const root = createRoot(container); // Create a root using React 18's API.

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Root element not found');
}
