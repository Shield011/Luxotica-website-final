import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter >
    <App />
    </BrowserRouter>

);


