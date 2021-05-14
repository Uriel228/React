import React from 'react';
import '../assets/styles/components/Header.scss'
const Header = () => (
    <header className="header">
    <img className="header__img" src="../assets/styles/logo-platzi-video.png" alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/styles/user-icon.png" alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;