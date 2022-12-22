import React, {useEffect, useState} from "react";
import {bookRequest} from "../../../components/context/BookRequest";
import {bookRequest2} from "../../../components/context/bookRequest2";
import Requests2BookPage from "./Requests2BookPage";
import RequestsBookPage from "./RequestsBookPage";
import './RequestsBook.scss'

const RequestsBook =()=>{
    const [books, setBooks] = useState([])
    const [books2, setBooks2] = useState([])
    const [isOpen, setIsOpen] = useState(true)
    useEffect(()=>{
        const fetchData = async () => {
            const items = await bookRequest()
            const items2 = await bookRequest2()
            setBooks(items)
            setBooks2(items2)
        }
        fetchData().then()
        },[]);

    function Open () {
        if(isOpen){
            return <RequestsBookPage/>
        }
        if(!isOpen){
            return <Requests2BookPage/>
        }
    }

    console.log(books)
    return(
        <div>
            <h1 style={{marginBottom: "20px", marginLeft: "20px"}}>Запросы</h1>
            <div style={{display:"flex"}}>
                <button className="button" onClick={()=>setIsOpen(true)}>Прими</button>
                <button className="button" onClick={()=>setIsOpen(false)}>Должны вернуть</button>
            </div>
            <div>
                <Open/>
            </div>
        </div>

    )
};
export default RequestsBook