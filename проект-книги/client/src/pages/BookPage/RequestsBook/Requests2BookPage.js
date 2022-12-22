import {useEffect, useState} from "react";
import {bookRequest2} from "../../../components/context/bookRequest2";
import Requests2CardBook from "./Requests2CardBook";
import '../../../index.css'

const Requests2BookPage = () =>{
    const [books, setBooks] = useState([])
    const [isShowBook, setIsShowBook] = useState(false)
    useEffect(()=>{
        const fetchData = async () => {
            const items = await bookRequest2()
            setIsShowBook(true)
            setBooks(items)
        }
        fetchData().then()
    },[]);


    return(
        <div className="CardBooks">
            {isShowBook && books.map((book, ind)=>
                <Requests2CardBook book={book} key={ind}/>
                )
            }
        </div>
    )
}

export default Requests2BookPage;