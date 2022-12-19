import React from 'react'
import pics from "./pic_reg.png";
import './Edit_book.scss'
import {Link} from 'react-router-dom'


const Card_book = () =>{
    return(
        <div className="main">
            <div className="main-userprofile">
                {/*
        <form method="">
*/}
                <div className='left-side'>
                    <h1>Книга</h1>

                    <div className='edit_profile'>
                    </div>
                    <div className="img-class">
                        <img src={pics} id="img-id"/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="tab-plane" role="tabpanel">
                        <div className="row">
                            <div className="col1">
                                <label><h4>Название книги:</h4></label>
                            </div>
                            <div className="col2">
                                Мастер и Маргарита
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Автор:</h4></label>
                            </div>
                            <div className="col2">
                                Алина
                            </div>
                        </div>

                        <div className="row">
                            <div className="col1">
                                <label><h4>Жанр:</h4></label>
                            </div>
                            <div className="col2">
                                роман
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Описание:</h4></label>
                            </div>
                            <div className="col2">
                                <p>Очень хорошая книга!!!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Язык:</h4></label>
                            </div>
                            <div className="col2">
                                <p>Русский</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label><h4>Пользователь:</h4></label>
                            </div>
                            <div className="col2">
                                <p>User506</p>
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

export default Card_book