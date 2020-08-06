import React from 'react';

const LoginContainer = ( { children }) => (
    <section className="login">
        <div className="login__container">
            {children}
        </div>
    </section>
)

export default LoginContainer;