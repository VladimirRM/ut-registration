import React from 'react';
import './Navbar.scss'
import Logo from '../../assets/img/lofo.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="" />
                <div className="navbar__header">MERN CLOUD</div>
                <div className="navbar__login"><NavLink to='login'>Войти</NavLink></div>
                <div className="navbar__registration"><NavLink to="registration">Регистрация</NavLink></div>
            </div>

        </div>
    );
};

export default Navbar;