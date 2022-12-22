import React, {useEffect, useState} from "react";
import '../../../index.css'
import MyCardBook from "./MyCardBook";
import {getAllMyBooks} from "../../../components/context/getMyBook";

const MyBook = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        console.log('вызвал юзэффект')
        const fetchData = async () => {
            const items = await getAllMyBooks()
            setBooks(items)
        }
        fetchData().then()
    },[])
    console.log(books)
    // const items = localStorage.getItem('mybooks')
    // const books = JSON.parse(items)

    return (
        <div style={{margin: "25px"}}>
            <h1 style={{marginBottom: "20px", marginLeft: "20px"}}>Мои книги</h1>
            <div className="CardBooks">
                {books.map((book, ind) => (
                    <MyCardBook book={book} key={ind}/>
                ))}

            </div>
        </div>
    )
};
export default MyBook