import React from 'react';
import {createRoot} from 'react-dom/client';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import App from './App';

const root=createRoot(document.querySelector("#root"));

root.render(<App/>);