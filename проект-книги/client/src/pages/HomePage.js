import React,{useEffect, useState} from 'react';
import CardBook from "../components/CardBook/CardBook";
import '../index.css'
import Search from '../components/Search/Search'
import '../components/Search/Search.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom'
import {searchBooks} from "../components/context/searchBook";


const HomePage =  () => {
    console.log("HomePage")
    const [books, setBooks] = useState([])
    const [searchValue, setSearchValue] = useState({search:''})

    useEffect(() => {
        const fetchData = async () => {
            const items = await searchBooks(searchValue)
            setBooks(items)
        }
        fetchData().then()
    },[])

    const findBooks = async (inputs) => {
        const items = await searchBooks(inputs)
        setBooks(items)
    }

    return (
        <div style={{margin: "25px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 style={{marginBottom: "20px", marginLeft: "20px"}}>Книги</h1>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Link to="/createbook"><p className="buttoncreate"><AddCircleOutlineIcon fontSize="medium"/></p>
                    </Link>
                    <Search searchValue={searchValue.search} setSearchValue={setSearchValue} findBooks={findBooks}/>
                </div>
            </div>

            <div className="CardBooks">

                {books && books.map((book, idx)=>(
                    <CardBook book={book} key={idx}/>
                ))}

            </div>
        </div>
    )
}
export default HomePage;