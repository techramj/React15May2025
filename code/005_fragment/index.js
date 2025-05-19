import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';  
import F from './Footer';
import './App.css'; // Importing CSS file



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div>
      <h3>First Demo of React!!!!</h3>
      <p>JSX mean java script with XML</p>
    </div>
    <p>Only one element can be return in JSX</p>
    <F />
  </React.StrictMode>
);

