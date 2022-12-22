import $api from "./userContext";
import {Navigate} from "react-router-dom";

export const OAuth2 = async (code)=>{
    const res = await $api.post('/login/github',{code})
    console.log('res', res.data)
    const items = res.data
    console.log(items)
    await localStorage.setItem('user', JSON.stringify(res.data))
    return <Navigate to="/" />;
    return res.data


}

