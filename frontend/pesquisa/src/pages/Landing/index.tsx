import React from 'react';
import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo-bem.png';
import './styles.css';

function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Pesquisa"/>
                    <h2>Formulário de Pesquisa</h2>
                </div>

                <div className="buttons-container">
                    <a href="https://www.bempromotora.com.br" className="home">
                        Página Inicial
                    </a>

                    <Link to="/form" className="form">
                        Responder o Formulário
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;