import notBook from "../../components/CardBook/notBook.jpg";

const createBookNew =({book})=>{
    return(
        <div>
            <div className="card">
                <img  width={80} height={140} src={notBook} alt="пусто" />
                <div className="contentcard" >

                    <p className="textBook">{book.namebook.toUpperCase()}</p>
                    <p className="text">{book.authorsurname + ' ' + book.authorname}</p>
                </div>
            </div>
        </div>
    )

};
export default createBookNew;