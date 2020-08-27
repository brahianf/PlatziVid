import React from 'react'

import '../assets/styles/Login.scss'
import Header from '../components/Header.jsx'
import LoginContainer from '../components/LoginContainer.jsx'
import LoginForm from '../components/LoginForm.jsx'
import Remembered from '../components/Remembered.jsx'
import SocialMedia from '../components/SocialMedia.jsx'
import Footer from '../components/Footer.jsx'

const Login = () => (
    <div className="Login">
        <Header />
        <LoginContainer>
            <LoginForm/>
            {/* <Remembered /> */}
            {/* <SocialMedia /> */}
        </LoginContainer>
        <Footer />
    </div>
);

export default Login;