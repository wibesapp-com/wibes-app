import React, { Component } from 'react';

import './wibesapp.css';

import wibesappLogo from './img/wibesapp-logo.png';


class Header extends Component
{
    render()
    {

        let logoContainer = (
            <div className="logo-container">
                <img src={wibesappLogo} alt="W" />
            </div>
        );

        let headerTitle = (
            <div className="header-title">
                <a href="#"><div className="raleway">WibesApp</div></a>
            </div>
        );

        let logoText = (
            <div className="logo-text">
                {logoContainer}
                {headerTitle}
            </div>
        );

        let hamBurger = (
            <div className="nav-toggle hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );

        let navBar = (
            <nav className="raleway">
                <ul>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our Platforms</a></li>
                    <li><a href="#">Why ?</a></li>
                    <li><a href="#">Our Crew</a></li>
                    <li><a href="#">Well Come Here</a></li>
                    <li><a href="#">Get in Touch</a></li>
                </ul>
            </nav>
        );
        return(
            <div className="header">
                {logoText}
                {hamBurger}
                {navBar}        
            </div>
        );
    }
}

export default Header;