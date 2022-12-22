import {useState} from "react";
import {cancellationReservation} from "../../../components/context/cancellationReservation";
import notBook from "../../../components/CardBook/notBook.jpg";
import {Link} from "react-router-dom";
import { AvatarGenerator } from "random-avatar-generator";
import moment from "moment/moment";
import '../../../components/CardBook/CardBook.scss'


const Requests2CardBook = (props) =>{
    const {book} = props
    const [isShowBook, setIsShowBook] = useState(true)
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    const handSubmit = async () => {
        console.log('click')
        await cancellationReservation(book)
        setIsShowBook(false)
    };
    const date = moment.utc(props.book.databooked).format('DD/MM/YY');
    return(
        <div>
                <div className="card">
                <img  width={100} height={170} src={notBook} alt="пусто" />
                <div className="contentcard">
                    <p className="textBook">{book.namebook.toUpperCase()}</p>
                    <p className="text">{book.authorsurname +' '+ book.authorname}</p>
                    <div style={{display:"flex"}}>
                        <p className="text" style={{marginRight: 5}}>Когда вернут: </p>
                        <p className="text">{date}</p>
                    </div>
                    <Link style={{textDecoration:"none"}} key={book.iduser} to={`/user/${book.iduser}`}>
                        <div className="user" style={{cursor:"pointer"  }}>
                            <img className="circle"  width={20} height={20} src={avatar} alt="юзер" />
                            <p>{book.usersurname + ' '+ book.username}</p>
                        </div>
                    </Link>
                    <div>
                        {isShowBook && <button className="mybutton"  onClick={handSubmit}>Книгу вернули</button>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Requests2CardBook;