import React, {useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../components/context/authContext";
import './Login.scss'
import logo from  '../../components/Navbar/LG.png'

function LoginPage() {
    console.log("LOGINPAGE");
    const {logIn,check} = useContext(AuthContext)
    const [inputs,setInputs] = useState({
        login:"",
        password:""
    })

    const clientId = "4ef512fe42e1d02a2716";
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;

    const handleChange = (even) =>{
        setInputs(prev =>({...prev,[even.target.name]:even.target.value}))
    }

    // useEffect(() => check(),[]);

    const navigate = useNavigate();

    const handSubmit = async even =>{
        even.preventDefault()
        try {
            await logIn(inputs);
            navigate('/')
        }
        catch (err){
            console.log(err.response.data)
        }
    };

    const handSubmit2 = async () =>{
        try {
            // window.location.reload();
            check();
            navigate('/')
        }
        catch (err){
            console.log(err.response.data)
        }
    };

    return(
        <div className='main-login'>
            <div className= 'login-contain'>
                <div className="left-side">
                    <div className="img-class">
                        <img src={logo} id="img-id" alt='^('/>
                    </div>
                    <h3>Вход</h3>
                    <form>
                        <label>Логин</label>
                        <input placeholder="Введите свой email" type="email" name="login" onChange={handleChange} id="emil1"/>
                        <label htmlFor="password">Пароль</label>
                        <input placeholder="Введите свой пароль" type="password" name="password" onChange={handleChange} id="pwd1"/>
                        <button type="submit" onClick={handSubmit} id="sub_butt">Войти</button>

                        {/*<button onClick={logingoogle}>google</button>*/}
                        {/*<button onClick={() => {window.location.replace('https://google.com/')}}>Кнопка-ссылка</button>*/}
                        {/*<button onClick={signInWithGoogle}>google</button>*/}
                    </form>
                    <div className="footer">
                        {/*<h4>Зайдите через: <a style={{marginLeft:"10px", marginTop:"5px"}} onChange={handSubmit2} href={githubUrl}>gitHub</a></h4>*/}
                        <h4> Нет аккаунта?  <Link to="/register"> Создайте </Link></h4>
                    <a></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;