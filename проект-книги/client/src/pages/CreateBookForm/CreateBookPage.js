import React, {useEffect, useState} from "react";
import CardCreateForm from "../../components/CardBook/CardCreateForm";
import {createFindBook} from "../../components/context/createFindBook";
import {useNavigate} from "react-router-dom";
import CreateBookNew from "./CreateBookNew";
import {createBook} from "../../components/context/createBook";
import InputsSearch from "./InputsSearch";
import './CreatePage.scss'
const CreateBookPage= ()=>{
    const [books, setBooks] = useState([])
    const [searchValue, setSearchValue] = useState({search:''})
    const [open, setOpen] = useState(true)
    // const [open1, setOpen1] = useState(true)
    const [mybook, setMyBook] = useState({
        idbook:"",
        bookname:"",
        authorsurname: "",
        authorname:"",
        review:"",
        bookperiod:""
    })

    // const [newbook, setNewBook] = useState({
    //     bookname: [],
    //     authorsurname: [],
    //     authorname: [],
    //     genre: [],
    //     language: "",
    //     review:"",
    //     bookperiod:""
    //
    // })

    const navigate = useNavigate();
    useEffect(() => {
        console.log('вызвал юзэффект')
        const fetchData = async () => {
            const items = await createFindBook(searchValue)
            setBooks(items)
        }
        fetchData().then()
    },[])

    console.log('books', books)
    const findBooks = async (inputs) => {
        const items = await createFindBook(inputs)
        setBooks(items)
    }

    const handleChange = (even) =>{
        setMyBook(prev =>({...prev,[even.target.name]:even.target.value}))
    }

    const handleSumbit = async () => {
        await createBook(mybook)
        navigate('/')
    }

    console.log('mybook',mybook)
    return(
        <div className='conteiner'>
            <h2>Создание книги</h2>
            {/*{open1 && <div>*/}
                {open &&
                <div>
                    <div>
                        <p>Введите название книги, которую хотите добавить</p>
                        <InputsSearch searchValue={searchValue.search} setSearchValue={setSearchValue}
                                      findBooks={findBooks}/>
                    </div>
                    {searchValue.search && <div>
                        <button onClick={() => {
                            setOpen1(false)
                        }}>Добавить новую
                        </button>
                        <div className="CardBooks">
                            {books && books.map((book, idx) => (
                                <CardCreateForm book={book} key={idx} setOpen={setOpen} setMyBook={setMyBook}/>
                            ))}
                        </div>
                    </div>}
                </div>
            }

            {
                !open &&  <div className='block'>
                <button onClick={()=>setOpen(true)}>Назад</button>
                <CreateBookNew book={mybook}/>
                <div className="search">
                <input className="input_book" placeholder="Аннотация" name="review" onChange={handleChange}/>
                </div>
                <div className="search">
                <input className="input_book" placeholder="Количество дней сдачи книги" name="bookperiod" onChange={handleChange}/>
                </div>
                <button onClick={handleSumbit} >Создать</button>
                </div>
            }
            {/*</div>*/}
            {/*}*/}

            {/*{*/}
            {/*    <div>*/}
            {/*    <button onClick={setOpen1(true)}>Назад</button>*/}
            {/*    !open1 && <div>*/}
            {/*       <input/>*/}
            {/*       <input/>*/}

            {/*    </div>*/}
            {/*    </div>*/}
            {/*}*/}

        </div>
    )
}

export default CreateBookPage