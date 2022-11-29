import React, {useState} from 'react'
import pics from "./pic_reg.png";
import './Edit_profile.scss'
import {Link} from "react-router-dom";


const Edit_profile = () =>{
    const[email,setemail]=useState('');
    const[username,setusername]=useState('');
    const[number_c,setnumber_c]=useState('');
    const[number_r,setnumber_r]=useState('');
    const[pwd1,setpwd1]=useState('');
    const[pwd2,setpwd2]=useState('');
    const[description,setdescription]=useState('');



    const handelsubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="main">
            <div className="main-userprofile">
                {/*
        <form method="">
*/}
                <div className='left-side'>
                    <h1>Редактирование личного профиля</h1>

                    <div className='edit_profile'>
                    </div>
                    <div className="img-class">
                        <img src={pics} id="img-id"/>
                    </div>
                    <p><input type='sub09mit' className="profile-edit-btn" name="btnAddMore" value="Сохранить изменения"/></p>
                    <Link to="/User_profile">
                        <p><input type='submit' className="profile-edit-btn" name="btnAddMore" value="Отменить изменения"/></p>
                    </Link>
                </div>
                <div className="right-side">
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
                        <div className='input-group'>
                            <h5>
                                Описание
                            </h5>
                            <input type="text" name="dscrp"
                                   value={description} onChange={(e)=>{setdescription(e.target.value)}}
                                   id="dscrp1"/>
                        </div>

                    </form>
                    </div>
                {/*
        </form>
*/}
            </div>
        </div>
    )
}

export default Edit_profile