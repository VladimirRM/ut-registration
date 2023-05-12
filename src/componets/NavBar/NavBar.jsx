import React from 'react'
import './NavBar.less'
import Logo from '../../assets/navbar-logo.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="" className='navbar__logo'/>
                <div className="navbar__header">MERN CLOUD</div>
                <div className="navbar__login"><NavLink to='/login'>Войти </NavLink></div>
                <div className="navbar__registration"><NavLink to='/registration'>Регистрация</NavLink></div>
            </div>
        </div>

    )
}

export default NavBar
