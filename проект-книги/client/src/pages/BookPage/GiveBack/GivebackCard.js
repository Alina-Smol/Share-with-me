import notBook from "../../../components/CardBook/notBook.jpg";
import {useState} from "react";
import {cancellationReservation} from "../../../components/context/cancellationReservation";
import { AvatarGenerator } from "random-avatar-generator";
import {Link} from "react-router-dom";
import moment from "moment";
import '../../../components/CardBook/CardBook.scss'

const GivebackCard =(props) => {
    const {book} = props
    const [isAdd, setIsAdd] = useState(true)
    //const [beforeReseved, setBeforReseved] = useState(true)
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    const date = moment.utc(props.book.databooked).format('DD/MM/YY');
    //console.log(date)
    // const date = new Date(props.book.databooked)
    function Status () {
        const status = props.book.waitingforconfirmation
        if(status === 2){
            return <button onClick={handSubmit}>Отменить бронирование</button>
        }
        if(status === 3){
            return <div style={{display:"flex"}}>
                <p className="text">До: </p>
                <p className="text" style={{marginLeft:"5px"}}>{date}</p>
            </div>
        }
    }

    const handSubmit = async () => {
        console.log('click')
        await cancellationReservation(book)
        setIsAdd(false)
    };

    return(
        <div>
            {isAdd && <div className="card">
                <img  width={100} height={170} src={notBook} alt="пусто" />
                <div className="contentcard">
                    <p className="textBook">{book.namebook.toUpperCase()}</p>
                    <p className="text">{book.authorsurname + ' ' + book.authorname}</p>
                    <div style={{display:"flex"}}>
                        <p className="text" style={{marginRight: 5}}>Сколько дней: </p>
                        <p className="text">{book.bookperiod}</p>
                    </div>
                    <Status/>
                    <Link style={{textDecoration:"none"}} key={book.iduser} to={`/user/${book.iduser}`}>
                        <div className="user" style={{cursor:"pointer"  }}>
                            <img className="circle"  width={20} height={20} src={avatar} alt="профиль" />
                            <p>{book.surname + ' '+ book.name}</p>
                        </div>
                    </Link>
                </div>
            </div>}
        </div>
    )

}

export default GivebackCard
