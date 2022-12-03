import React, {useState} from 'react'
import {Link} from "react-router-dom";

import './Login.scss'

import logo from './logoPng.png'

function Login() {

    const [emailval,setemailval]=useState("")
    const [passval,setpassval]=useState("")


    const handlesubmit=(event)=>{
        event.preventDefault()
    }

    return(
        <div className='main-login'>
            <div className= 'login-contain'>
                <div className="left-side">
                    <div className="img-class">
                        <img src={logo} id="img-id"/>
                    </div>
                    <h3>Вход</h3>
                    <form onSubmit={handlesubmit}>
                        <label htmlFor="emil1">Логин</label>
                        <input placeholder="Введите свой email" type="email" value={emailval}
                            onChange={(e)=>{setemailval(e.target.value)}}
                               id="emil1"/>
                        <label htmlFor="pwd1">Пароль</label>
                        <input placeholder="Введите свой пароль" type="password"
                        value={passval} onChange={(e)=>{setpassval(e.target.value)}}
                               id="pwd1"/>
                        <button type="submit" id="sub_butt">Войти</button>
                    </form>
                    <div className="footer">
                        <h4> Нет аккаунта?  <Link to="/Register"> Создайте </Link>
                        </h4>
                        <Link to="/User_profile"> Проверка </Link>
                    </div>
                </div>
{/*
                <div className="right-side"></div>
*/}

            </div>
        </div>
    )
}

export default Login;
