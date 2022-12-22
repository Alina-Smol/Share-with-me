import notBook from './notBook.jpg'
import './CardBook.scss'
import {bookRequestButton} from "../context/bookRequestButton";
import {useState} from "react";
import userPage from "../../pages/UserPage";
import {Link, useParams} from "react-router-dom";
import UserPage from "../../pages/UserPage";
import {AvatarGenerator} from "random-avatar-generator";

const CardBook =(props)=>{
    const {book} = props
    const [isAdd, setIsAdd] = useState(true)
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    const handSubmit = async () => {
       // even.preventDefault()
        console.log('click')
        console.log(book)
        await bookRequestButton(book)
        setIsAdd(false)
    };
    //const {iduser} = useParams();

    return(
        <div >
            <div className="card">
                    <img  width={100} height={170} src={notBook} alt="пусто" />
                    <div className="contentcard">
                        <p className="textBook">{book.namebook.toUpperCase()}</p>
                        <p className="text">{book.authorsurname + ' ' + book.authorname}</p>
                        <div style={{display:"flex"}}>
                            <p className="text" style={{marginRight: 5}}>Сколько дней: </p>
                            <p className="text">{book.bookperiod}</p>
                        </div>
                        <Link style={{textDecoration:"none"}} key={book.iduser} to={`/user/${book.iduser}`}>
                            <div className="user" style={{cursor:"pointer"  }}>
                                <img className="circle"  width={20} height={20} src={avatar} alt="юзер" />
                                <p>{book.usersurname + ' '+ book.username}</p>
                            </div>
                        </Link>
                        <Link style={{textDecoration:"none"}} key={book.idbookinstance} to={`/book/${book.idbookinstance}`}><div className="text">Подробнее...</div></Link>
                        {isAdd && <button type="submit" className="mybutton" onClick={handSubmit} id="sub_butt">Хочу эту
                            книгу</button>
                        }
                    </div>
            </div>
        </div>


    )

}

export default CardBook;