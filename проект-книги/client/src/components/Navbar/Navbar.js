import './Navbar.scss'
import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {AuthContext} from "../context/authContext";
import logo from './LG.png'
const Navbar = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handSubmit = async () =>{
            logout()
            // localStorage.removeItem('books')
            // localStorage.removeItem('mybooks')
            navigate("/login");

    };
    return(
        <div className='navbar'>
            <div className='left'>
                <img width={40} height={40} src={logo} alt="лого"/>
                <h3>share with me</h3>
            </div>
                <ul>
                    <Link to="/" style={{textDecoration:"none"}}><li><MenuBookIcon style={{margin:"5px"}}/>Главная</li></Link>
                    <Link to="/books" style={{textDecoration:"none"}}>
                    <li ><BookmarkBorderIcon style={{margin:"5px"}}/>
                        Книги
                    </li>
                    </Link>
                    <Link to="/account" style={{textDecoration:"none"}}><li><AccountCircleIcon style={{margin:"5px"}}/>Профиль</li></Link>
                    <li><button type="submit" onClick={handSubmit}>Выйти</button></li>
                </ul>

        </div>
    )
};


export default Navbar;