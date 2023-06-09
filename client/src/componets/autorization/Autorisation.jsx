import React, {useState} from 'react';
import './Autorisation.scss'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Authorization = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="registration__btn" onClick={() => registration(email, password)}>Войти</button>
        </div>
    );
};

export default Registration;
