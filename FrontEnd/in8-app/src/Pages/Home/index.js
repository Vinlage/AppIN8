import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';

export default function Home() {

    const indexImage = require('../../Assets/Images/index-image.jpg');
    const logo = require('../../Assets/Images/logo-in8-dev.svg');
    const ham = require('../../Assets/Icons/hamburguer.svg');
    const hamOpen = require('../../Assets/Icons/hamburguer-aberto0.svg');

    function openSideNav() {
        let element = document.getElementById('sidenav')
        if(element.style.display === "block"){
            element.style.display = "none";
        }
        else{
            element.style.display = "block";
        }
        
    }

    return (
        <div className="home-container" id="home">
            <div className="content">
                <img className="image-index" src={indexImage} alt=""/>
                <img className="logo-index" src={logo} alt=""/>
                <a className="sidenav-trigger" onClick={openSideNav}>
                    <img className="ham" src={ham} alt=""/>
                </a>

                <ul className="sidenav-menu" id="sidenav">
                    <li><a className="sidenav-trigger" onClick={openSideNav}>
                        <img className="hamOpen" src={hamOpen} alt=""/>
                    </a></li>
                    <li className="sidenav-link"><Link 
                        activeClass="active"
                        to="users"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    lista</Link></li>
                    <li className="sidenav-link"><Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    sobre mim</Link></li>
                    <li className="sidenav-link"><Link 
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    cadastro</Link></li>
                    
                </ul>
                
                <div className="home-title">
                    <div style={{fontSize: "6vw"}}>ESTÁGIO</div> 
                    <div style={{fontSize: "3vw"}}>PROVA DE SELEÇÃO</div>
                </div>
                <div className="quick-link">
                    <Link className="link"
                        activeClass="active"
                        to="register"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    cadastro</Link>
                    &bull;
                    <Link className="link"
                        activeClass="active"
                        to="users"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    lista</Link>
                    &bull;
                    <Link className="link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                    sobre mim</Link>
                </div>
            </div>
        </div>
    );
}