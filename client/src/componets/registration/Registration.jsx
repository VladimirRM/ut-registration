import React from 'react';
import './Registration.scss'

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration__header"></div>
            <input type="text"  placeholder=''/>
            <input type="text"  placeholder=''/>
            <input type="text"  placeholder=''/>
            <input type="text"  placeholder=''/>
            <button className="registration">Войти</button>
        </div>
    );
};

export default Registration;