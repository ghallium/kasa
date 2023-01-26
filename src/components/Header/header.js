import React from "react";
import LogoKasa from "../../assets/logo.png";
import './header.css';
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div>
                <a href="/"><img src={LogoKasa} alt="logo Kasa" /></a>
            </div>
                <ul>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </ul>
            
        </header>
    )
}