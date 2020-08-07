import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import logoUser from '../assets/static/user-icon.png';

const Header = () => (
        <header className="header">
            <Link to="/"><img className="header__img" src={logo} alt="Logo"/></Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <Link to="/login"><img src={logoUser} alt="User"/></Link>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li>Cuenta</li>
                    <li><a href="">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
);

export default Header;