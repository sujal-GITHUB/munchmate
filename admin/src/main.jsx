import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'; // Import named export
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
