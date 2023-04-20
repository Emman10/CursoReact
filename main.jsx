import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../style.css"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWx8fvSd0OhJ_oY8cMp-1PD9bjFoM8ydI",
  authDomain: "curso-react-e4cc6.firebaseapp.com",
  projectId: "curso-react-e4cc6",
  storageBucket: "curso-react-e4cc6.appspot.com",
  messagingSenderId: "879891128926",
  appId: "1:879891128926:web:45f647098c1c2ed67d4acf"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
