import notBook from './notBook.jpg'
import './CardBook.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import CreateBookNew from "../../pages/CreateBookForm/CreateBookNew";


const CardCreateForm =({book, setOpen, setMyBook})=>{
    console.log(book)
    const [isAdd, setIsAdd] = useState(true)
    const handSubmit = async () => {
        setOpen(false)
        setMyBook(book)
    };
    return(
        <div >
            {isAdd &&
                <div className="card">
                        <img  width={80} height={140} src={notBook} alt="пусто" />
                        <div className="contentcard" >
                            <p className="textBook">{book.namebook.toUpperCase()}</p>
                            <p className="text">{book.authorsurname + ' ' + book.authorname}</p>
                            <button type="submit" className="mybutton" onClick={handSubmit} id="sub_butt">Это нужная книга</button>
                        </div>
                </div>
            }
        </div>


    )

}

export default CardCreateForm;