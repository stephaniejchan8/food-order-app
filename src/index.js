import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuContextProvider } from './context/menu-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MenuContextProvider>
        <App />
    </MenuContextProvider>
);