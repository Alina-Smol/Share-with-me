import notBook from "../../../components/CardBook/notBook.jpg";
import {useState} from "react";
import {cancellationReservation} from "../../../components/context/cancellationReservation";
import {bookingConfirmation} from "../../../components/context/bookingConfirmation";
import {Link} from "react-router-dom";
import {AvatarGenerator} from "random-avatar-generator";

const RequestsCardBook = (props) => {
    const {book} = props
    const [isAdd, setIsAdd] = useState(true)
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    const handSubmit = async () => {
        console.log('click')
        await cancellationReservation(book)
        setIsAdd(false)
    };

    const handSubmit2 = async ()=>{
        console.log('click2')
        await bookingConfirmation(book)
        setIsAdd(false)
        // window.location.reload();
    }

    return(
        <div>

                <div className="card">
                <img  width={100} height={170} src={notBook} alt="пусто" />
                <div className="contentcard">
                    <p className="textBook">{book.namebook.toUpperCase()}</p>
                    <p className="text">{book.authorsurname +' '+ book.authorname}</p>
                    <Link style={{textDecoration:"none"}} key={book.iduser} to={`/user/${book.iduser}`}>
                        <div className="user" style={{cursor:"pointer"  }}>
                            <img className="circle"  width={20} height={20} src={avatar} alt="юзер" />
                            <p>{book.usersurname + ' '+ book.username}</p>
                        </div>
                    </Link>
                    {isAdd && <div>
                         <button onClick={handSubmit2} className='mybutton'>Подтвердить</button>
                        <button onClick={handSubmit} className='mybutton'>Отказать</button>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default RequestsCardBook