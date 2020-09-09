import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/back.svg';
import logoImg from '../../assets/images/logo-bem.png';
import './styles.css';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img className="back" src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Logo"/>
            </div>
        </header>
    )
}

export default PageHeader;