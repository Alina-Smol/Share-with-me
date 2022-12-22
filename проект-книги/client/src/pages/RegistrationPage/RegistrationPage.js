import React from 'react'
import {useState} from "react";
import './Registration.scss'

import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

//import logo from './logoPng2.png'
//import registerimg from './pic.png'

function RegistrationPage() {
    const [inputs,setInputs] = useState({
        name:"",
        surname: "",
        dormroom:"",
        roomnumber:"",
        connection:"",
        login:"",
        password:""
    })
    const handleChange = (even) =>{
        setInputs(prev =>({...prev,[even.target.name]:even.target.value}))
    }

    const navigate = useNavigate()
    const handSubmit = async even =>{
        even.preventDefault()
        try {
            const res = await axios.post("http://127.0.0.1:5000/auth/registration", inputs)
            console.log(res)
            navigate('/login')
        }
        catch (err){
            console.log(err.response.data)
        }
    };

    return(
        <div className='main-Register'>
            {/*
            <Link to="/"> Войти </Link>*/}
            <div className='left-side'>
               {/* <div className='header'>
                    <img src={logo} id='logo-img'/>
                </div>*/}
                <div className='body'>
                    {/*<img src={registerimg} id='registr-img'/>*/}
                </div>
                <p> Share with me - приложение для буккросинга. Делитесь своими любимыми книгами и открывайте новые для себя миры.  </p>
                    <p className="Login"> Уже есть аккаунт?</p>
                    <Link to="/login"> <p className="Login-link">Войти</p> </Link>

            </div>

            <div className='right-side'>

                <div className='body-right'>
                    <div className='container'>

{/*
                        <form>
*/}                     <div className='form' > <h1>Регистрация</h1>
                            <div className='input-group'>
                                <h5>
                                    Имя пользователя
                                </h5>
                                <input type="text" name="name" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Фамилия пользователя
                                </h5>
                                <input type="text" name="surname" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Номер общежития
                                </h5>
                                <input type="number" name="dormroom" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Номер комнаты
                                </h5>
                                <input type="number" name="roomnumber" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Ссылка на месседжер
                                </h5>
                                <input type="text" name="connection" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Email
                                </h5>
                                <input type="Email" name="login" onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <h5>
                                    Пароль
                                </h5>
                                <input type="password" name="password" onChange={handleChange}/>
                            </div>
                            {/*<div className='input-group'>*/}
                            {/*    <h5>*/}
                            {/*        Повторите пароль*/}
                            {/*    </h5>*/}
                            {/*    <input type="password" name="pwd"*/}
                            {/*           id="pwd2"/>*/}
                            {/*</div>*/}
                            <input type="submit" id="sbtn" value="Зарегистрироваться" onClick={handSubmit}/>
{/*
                        </form>
*/}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegistrationPage;