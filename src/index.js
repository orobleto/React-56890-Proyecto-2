import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Tabla2 from './Componentes/Tabla2';
import HookBasico from './Componentes/HookBasico';


ReactDOM.render(
  <React.StrictMode>
    <HookBasico numeroInicial={1}/>
  </React.StrictMode>,
  document.getElementById('root')
);

