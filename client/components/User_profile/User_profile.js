import React from 'react'
import pics from "./pic_reg.png";
import './User_profile.scss'
import {Link} from 'react-router-dom'


const User_profile = () =>{
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
                   <Link to="/Edit_profile">
                       <p><input type='submit' className="profile-edit-btn" name="btnAddMore" value="Изменить профиль"/></p>
                   </Link>
            </div>
            <div className="right-side">
                <div className="tab-plane" role="tabpanel">
                    <div className="row">
                    <div className="col1">
                    <label><h4>Email:</h4></label>
                    </div>
                    <div className="col2">
                        Al93983
                    </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label><h4>Имя пользователя:</h4></label>
                        </div>
                        <div className="col2">
                            Алина
                        </div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <label><h4>Номер общежития:</h4></label>
                        </div>
                        <div className="col2">
                           15
                        </div>
                    </div>
                    <div className="row">
                    <div className="col1">
                        <label><h4>Номер комнаты:</h4></label>
                    </div>
                    <div className="col2">
                        <p>512</p>
                    </div>
                    </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Описание:</h4></label>
                            </div>
                            <div className="col2">
                               <p>_____________</p>
                        </div>
                        </div>
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