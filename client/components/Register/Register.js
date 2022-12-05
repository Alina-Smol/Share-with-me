import React, {useState} from 'react'

import './Register.scss'

import {Link} from "react-router-dom";

import logo from './logoPng2.png'

import registerimg from './pic.png'

function Register() {


    const[email,setemail]=useState('');
    const[username,setusername]=useState('');
    const[number_c,setnumber_c]=useState('');
    const[number_r,setnumber_r]=useState('');
    const[pwd1,setpwd1]=useState('');
    const[pwd2,setpwd2]=useState('');


    const handelsubmit = (e) => {
        e.preventDefault();
    }



    return(
        <div className='main-Register'>
{/*
            <Link to="/"> Войти </Link>
*/}
            <div className='left-side'>
                 <div className='header'>
                    <img src={logo} id='logo-img'/>
                </div>
                <div className='body'>
                    <img src={registerimg} id='registr-img'/>
                </div>
                <p> Share with me - риложение для буккросинга. Делитесь своими любимыми книгами и открывайте новые для себя миры.  </p>
            </div>

            <div className='right-side'>
               <div className='top-right'>
               <h5> Уже есть аккаунт?
               </h5>

            <Link id ='Link-signin' to="/"> Войти </Link>

               </div>
                <div className='body-right'>
                    <div className='container'>
                        <h1>Регистрация</h1>
                        <form onSubmit={handelsubmit}>
                        <div className='input-group'>
                            <h5>
                                Имя пользователя
                            </h5>
                            <input type="text" name="Uname"
                                   value={username} onChange={(e)=>{setusername(e.target.value)}}
                                   id="user_name"/>
                        </div>
                        <div className='input-group'>
                            <h5>
                                Номер общежития
                            </h5>
                            <input type="number" name="ncname"
                                   value={number_c} onChange={(e)=>{setnumber_c(e.target.value)}}
                                   id="number_home"/>
                        </div>
                        <div className='input-group'>
                            <h5>
                                Номер комнаты
                            </h5>
                            <input type="number" name="nrname"
                                   value={number_r} onChange={(e)=>{setnumber_r(e.target.value)}}
                                   id="namber_room"/>
                        </div>
                        <div className='input-group'>
                            <h5>
                                Email
                            </h5>
                            <input type="Email" name="email"
                                   value={email} onChange={(e)=>{setemail(e.target.value)}}
                                   id="email1"/>
                        </div>
                        <div className='input-group'>
                            <h5>
                                Пароль
                            </h5>
                            <input type="password" name="pwd"
                                   value={pwd1} onChange={(e)=>{setpwd1(e.target.value)}}
                                   id="pwd1"/>
                        </div>
                        <div className='input-group'>
                            <h5>
                                Повторите пароль
                            </h5>
                            <input type="password" name="pwd"
                                   value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}}
                                   id="pwd2"/>
                        </div>
                            <input type="submit" id="sbtn" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;