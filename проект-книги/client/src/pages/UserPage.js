import {useParams} from "react-router-dom";
import User from "../components/User/User";
import React, {useEffect, useState} from "react";
import {getUser} from "../components/context/getUser";

const UserPage = () => {
    const [aboutuser, setAboutuser] = useState([])
    const {iduser} =useParams()
    const [user, setUser] = useState({
        iduser: iduser
    })
    //const {iduser} =

    console.log("user",user)
    useEffect(() => {
        const fetchData = async () => {
            const items = await getUser(user)
            setAboutuser(items)
        }
        fetchData().then()
    },[])
return(
    <div style={{padding:"20px", margin:"20px"}}>
        <h1>Страница пользователя</h1>
        {/*<div className="main" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>*/}
            <div className="main-userprofile" style={{margin:"0px", display:"flex", justifyContent:"center", alignItems:"center", minWidth:"500px"}}>

                {aboutuser && <User user={aboutuser} />}
            </div>
        {/*</div>*/}
    </div>
)
}
export default UserPage