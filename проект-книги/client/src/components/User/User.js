//import {useParams} from "react-router-dom";
//import 'SelfPage.scss'
import '../../pages/SelfPage/SelfPage.scss'

const User = (props)=>{
    const {user} = props
    console.log(user)
    return (
        <div className="container">
            <div className="group-left">
                <p>Email:</p>
                <p>Фамилия Имя:</p>
                <p>Номер общежития:</p>
                <p>Номер комнаты:</p>
                <p>Как связаться:</p>

            </div>
            <div className="group-right">
                <p>{user.login}</p>
                <p>{user.name + ' ' +user.surname}</p>
                <p>{user.dormroom}</p>
                <p>{user.roomnumber}</p>
                <p>{user.connection}</p>
            </div>

        </div>
    )

}

export default User