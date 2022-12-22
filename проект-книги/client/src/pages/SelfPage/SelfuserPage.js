import React, {useEffect, useState} from "react";
import {getYourSelf} from "../../components/context/getYourSelf";
import User from "../../components/User/User";
import AboutBook from "../../components/AboutBook/AboutBook";

const SelfPage = () => {

    const [aboutuser, setAboutuser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const items = await getYourSelf()
            setAboutuser(items)
        }
        fetchData().then()
    },[])

    return(

    <div style={{padding:"20px", margin:"20px"}}>
        <h1>Личный кабинет</h1>
        <div className="main-userprofile" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {aboutuser && <User user={aboutuser} />}
        </div>
    </div>
    )
};

export default SelfPage;