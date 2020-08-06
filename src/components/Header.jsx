import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
        <header className="header">
            <Link to="/"><img className="header__img" src="https://i.imgur.com/qG8ZZ3W.png" alt=""/></Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <Link to="/login"><img src="https://imgur.com/AOjMhTg.png" alt="User"/></Link>
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