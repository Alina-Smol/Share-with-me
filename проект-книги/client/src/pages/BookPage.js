import AboutBook from "../components/AboutBook/AboutBook";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {aboutBook} from '../components/context/aboutBook'
import User from "../components/User/User";


const BookPage = () => {
    const [aboutbook, setAboutBook] = useState([])
    const {idbookinstance} = useParams()
    const [book, setBook] = useState({
        idbookinstance: idbookinstance
    })
    console.log(idbookinstance)

    useEffect(() => {
        const fetchData = async () => {
            const items = await aboutBook(book)
            console.log('items', items)
            setAboutBook(items)
        }
        fetchData().then()
    },[])
    return(
           <div style={{padding:"20px", margin:"20px"}}>
               <h1>Книга</h1>
               {/*<div className="main" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px"}}>*/}
            <div className="main-userprofile" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                {aboutbook && <AboutBook book={aboutbook}/>}
            </div>
        {/*</div>*/}
    </div>
    )

}
export default BookPage;