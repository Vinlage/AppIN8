import React from 'react';
import './styles.css';

export default function Footer() {
    const footerImage = require('../../Assets/Images/rodape-desktop.jpg');

    return (
        <div className="home-container" id="about">
            <div className="content">
                <div className="about">
                    <p>Fulano Beltrano de Oliveira da Silva</p>
                    <p>fulanobos@gmail.com</p>
                    <p>(31) 9 9666-1111</p>
                    <p>Faculdade de Belo Horizonte</p>
                </div>
                <img className="image-footer" src={footerImage} alt=""/>
                
            </div>
        </div>
    );
}