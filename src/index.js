import React from 'react';
import ReactDOM from 'react-dom/client';
import Contador from './Componentes/Contador';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contador />);



