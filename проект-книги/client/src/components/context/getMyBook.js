import $api from "./userContext";


export const getAllMyBooks = async ()=>{
    const res = await $api.get("/mybooks")
    const items = res.data
    //localStorage.setItem('mybooks', JSON.stringify(items.books))
    return items.books
}