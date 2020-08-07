import React from 'react';

import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const SocialMedia = () => (
    <section className="login__container--social-media">
        <div><img src={googleIcon} alt="Google">Inicia sesión con Google</img></div>
        <div><img src={twitterIcon} alt="Facebook">Inicia sesión con twitter </img></div>
        <p className="login__container--register">No tienes ninguna cuenta  <a href="">Regístrate</a></p>   
    </section>
)

export default SocialMedia;