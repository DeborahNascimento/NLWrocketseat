import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt=""/>
            </div>
        </div>

    )
}

export default Landing;