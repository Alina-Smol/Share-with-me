import $api from "./userContext";

export const createBook = async (inputs)=>{
    const res = await $api.post("/createbook", inputs)
    const items = res.data
    //console.log(res.data)
    //localStorage.setItem('books', JSON.stringify(items.books))
    return items.books
}