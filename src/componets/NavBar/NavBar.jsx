import React from 'react'
import './NavBar.less'
import Logo from '../../assets/navbar-logo.svg'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="" />
                <div className="navbar__header">MERN Cloud</div>
                <div className="navbar__login">Войти </div>
                <div className="navbar__registration">Регистрация</div>
            </div>
        </div>

    )
}

export default NavBar
