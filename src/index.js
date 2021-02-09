import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../src/components/Logo';
import Buscador from '../src/components/Buscador';
import RutaLogo from '../src/assets/images/foxbel-music@3x.png';
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Logo
      imagen={RutaLogo}
      clase='dimension'
      descripcion='logo'
    />
  </React.StrictMode>,
  document.getElementById('logo')
);

ReactDOM.render(
  <React.StrictMode>
    <Buscador />
  </React.StrictMode>,
  document.getElementById('buscador')
);