import React, {useState} from 'react';
import './BasketPage.scss'
import {Link} from "react-router-dom";
import MyBook from "./MyBook/MyBook";
import RequestsBook from "./RequestsBook/RequestsBook";
import GivebackBookPage from "./GiveBack/GivebackBookPage";

const BookPages = () => {
    const [inputs, setInputs] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function Book (){
        if(inputs === 1){
            return <MyBook/>
        }
        if(inputs === 2){
            return <RequestsBook/>
        }
        if(inputs === 3){
            return <GivebackBookPage/>
        }
    }

    return(
        <div style={{margin: "25px"}}>
            <div className="Button">
               <ul>
                   <Link to='/books/mybook'  style={{textDecoration:"none"}}>
                        <li className="ptittle" onClick={() => setInputs(1)}>Мои книги</li>
                   </Link>
                   <Link to='/books/requests'  style={{textDecoration:"none"}}>
                       <li className="ptittle" onClick={() => setInputs(2)}>Запросы</li>
                   </Link>
                   <Link to='/books/giveback'  style={{textDecoration:"none"}}>
                       <li className="ptittle" onClick={() => setInputs(3)}>Не забудь вернуть</li>
                   </Link>
               </ul>
            </div>
            <Book/>
        </div>
    )
}

export default BookPages;