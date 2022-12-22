import notBook from "../../../components/CardBook/notBook.jpg";
import {useState} from "react";
import {deleteBook} from "../../../components/context/deleteBook";

const MyCardBook = (props) =>{
    const {book} = props

    function Status(props) {
        const status = props.book.waitingforconfirmation;
        if (status == 1) {
            return <div style={{display:"flex", alignItems: "center", paddingLeft:"5px"}}>
                <div className="text">книга дома</div>

            </div>
        }
        if (status == 2){
            return <div className="text" style={{display:"flex", alignContent:"center", paddingLeft:"5px"}}>
                проверь запросы
            </div>
        }
        if (status == 3){
            return <div  style={{display:"flex", alignContent:"center" , paddingLeft:"5px"}}>
                <div className="text">забронированна </div>

            </div>
        }
    }
    const [isOpen, setIsOpen] = useState(true)
    const DeleteBook = async () => {
        console.log('click')
        await deleteBook(book)
        setIsOpen(false)
    }


    return(
        <div>
            <div className="card">
                <img  width={100} height={170} src={notBook} alt="пусто" />
                <div className="contentcard">
                    <p className="textBook">{book.namebook.toUpperCase()}</p>
                    <p className="text">{book.authorsurname + ' ' + book.authorname}</p>
                    <div style={{display:"flex"}}>
                        <p className="text" style={{marginRight: 5}}>Сколько дней: </p>
                        <p className="text">{book.bookperiod}</p>
                    </div>

                    <div style={{display:"flex"}}>
                        <p className="text">Статус:</p>
                        <Status book={book}/>
                    </div>
                    { isOpen &&<div >
                        {/*{book.waitingforconfirmation ===1 &&<button type="submit" className="mybutton">Редактирование</button>}*/}
                        {book.waitingforconfirmation ===1 &&<button onClick={DeleteBook} type="submit" className="mybutton">Удалить</button>}
                    </div>}
                </div>
            </div>
        </div>

    )
};

export default MyCardBook