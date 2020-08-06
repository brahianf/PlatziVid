import React from 'react';

const LoginForm = ( { children }) => (
    <form action="" className="login__container--form">
        <h2>Inicia Sesión</h2>
        <input aria-label="Correo" className="input" type="text" placeholder="Correo"/>
        <input  aria-label="Contraseña"className="input" type="password" placeholder="Contraseña"/>
        <button className="button"> <a href="./pages/home.html">Iniciar Sesión </a></button>
        {children}
    </form>
)

export default LoginForm;