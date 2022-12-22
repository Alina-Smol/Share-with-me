import {useEffect, useState} from "react";
import {bookRequest} from "../../../components/context/BookRequest";
import RequestsCardBook from "./RequestsCardBook";
import '../../../index.css'

const RequestsBookPage = () =>{
    const [books, setBooks] = useState([])
    const [isShowBook, setIsShowBook] = useState(false)
    useEffect(()=>{
        const fetchData = async () => {
            const items = await bookRequest()
            setIsShowBook(true)
            setBooks(items)
        }
        fetchData().then()
    },[]);


    return(
        <div className="CardBooks">
            {isShowBook && books.map((book, ind)=>
                <RequestsCardBook book={book} key={ind}/>
            )}
        </div>
    )
}

export default RequestsBookPage;