import './AboutBook.scss'
const AboutBook = (props) => {
    const {book} = props
    console.log('book', book)
    return(
        <div className="main">
            <div className="group1">
                <p>Название книги</p>
                <p>Автор(-ы)</p>
                <p>Жанр(-ы)</p>
                <p>Комментарий</p>
                <p>Язык</p>
            </div>
            <div className="group2">
                <p>{book.namebook}</p>
                <p>{book.book_author}</p>
                <p>{book.allgenre}</p>
                <p>{book.review}</p>
                <p>{book.language}</p>
            </div>
        </div>)
}

export default AboutBook;