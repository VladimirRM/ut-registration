import React from 'react'
import './Registration.less'
import input from '../../utils/input/input'

const Registration = () => {
  return (
    <div className='registration'>
      <div className="registration__header">Регистрация</div>
      <input type='text' placeholder=''/>
      <input type='text' placeholder=''/>
      <input type='text' placeholder=''/>
      <input type='text' placeholder=''/>
      <button className="registration">Войти</button>
    </div>
  )
}

export default Registration
