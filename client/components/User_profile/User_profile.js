import React, {useEffect} from 'react'
import pics from "./pic_reg.png";
// import './User_profile.scss'
// import {Link} from 'react-router-dom'
import { useState } from "react";
import Axios from "axios";


function User_profile(){
    const[aboutuser, setaboutuser] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:5005").then((result) => { // result - всё, что придёт с бэкенда
            setaboutuser(result.data);
        })})



   /* const getUser = () => {
        Axios.get("http://localhost:5005/userprofile").then((result) => { // result - всё, что придёт с бэкенда
             setaboutuser(result.data);
        });
    }
*/
    return(
        <div className="main">
            <div className="main-userprofile">

{/*
        <form method="">
*/}
              <div className='left-side'>
                  <h1>Личный кабинет</h1>

                  <div className='edit_profile'>
                 </div>
                    <div className="img-class">
                        <img src={pics} id="img-id"/>
                    </div>
                 {/*  <Link to="/Edit_profile">
                       <p><input type='submit' className="profile-edit-btn" name="btnAddMore" value="Изменить профиль"/></p>
                   </Link>*/}
            </div>
            <div className="right-side">
                <div>
                {aboutuser.map((val,key) => {
                    return (
                <div className="tab-plane" role="tabpanel">

                    <div className="row">
                    <div className="col1">
                    <label><h4>Email:</h4></label>
                    </div>
                    <div className="col2">
                        {val.login}
                    </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label><h4>Имя пользователя:</h4></label>
                        </div>
                        <div className="col2">
                            {val.name}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <label><h4>Фамилия:</h4></label>
                        </div>
                        <div className="col2">
                            {val.surname}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <label><h4>Номер общежития:</h4></label>
                        </div>
                        <div className="col2">
                            {val.dormroom}
                        </div>
                    </div>
                    <div className="row">
                    <div className="col1">
                        <label><h4>Номер комнаты:</h4></label>
                    </div>
                    <div className="col2">
                        <p>{val.roomnumber}</p>
                    </div>
                    </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Описание:</h4></label>
                            </div>
                            <div className="col2">
                               <p>{val.connection}</p>
                        </div>
                        </div>
                </div>
                    )

                })};
                </div>
            </div>
{/*
        </form>
*/}
    </div>
        </div>
    )
}

export default User_profile
