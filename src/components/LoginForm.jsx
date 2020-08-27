import React, { useState } from 'react';

const LoginForm = ( { children }) => {
    const [form, setValues] = useState({
        email: '',
    })

    const handleInput = event => {
        setValues({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <section className="login">
            <section className="login_container"> 
                <h2>Inicia Sesión</h2>
                <form action="" className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        aria-label="Correo"
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        aria-label="Contraseña"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar Sesión</button>
                </form>
            </section>
        </section>
    )
}

export default LoginForm;