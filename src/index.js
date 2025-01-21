import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Correct import for React 18
import { Provider } from 'react-redux';
import store from './redux/store'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Correct method for React 18
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
