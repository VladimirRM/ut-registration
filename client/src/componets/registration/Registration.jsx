import React,{useState} from 'react';
import './Registration.scss'
import Input from '../../utils/input/Input';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='registration'>
            <div className="registration__header"></div>
            <input value={email} setValue={setEmail}type="text" placeholder='Введите email' />
value={}
            <input value={password}type="password"setValue={setPassword} placeholder='Введите пароль' />

            <button className="registration">Войти</button>
        </div>
    );
};

export default Registration;