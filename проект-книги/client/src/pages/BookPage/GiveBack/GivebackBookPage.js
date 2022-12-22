import React, {useEffect, useState} from "react";
import {getAllMyBooks} from "../../../components/context/getMyBook";
import MyCardBook from "../MyBook/MyCardBook";
import GivebackCard from "./GivebackCard";
import {ReturnBook} from "../../../components/context/returnBook";

const GivebackBookPage =()=>{
    const [books, setBooks] = useState([])

    useEffect(()=>{
        //console.log('вызвал юзэффект')
        const fetchData = async () => {
        const items = await ReturnBook()
            console.log(items)
        setBooks(items)
    }
    fetchData().then()
    },[])
    return(
        <div style={{margin: "25px"}}>
            <h1 style={{marginBottom: "20px", marginLeft: "20px"}}>Верни книги</h1>
            <div className="CardBooks">
                {books.map((book, ind) => (
                    <GivebackCard book={book} key={ind}/>
                ))}

            </div>
        </div>
    )
}
export default GivebackBookPage