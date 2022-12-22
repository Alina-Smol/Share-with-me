import $api from "./userContext";

export const searchBooks = async (inputs)=>{
    const res = await $api.post("/findbook", inputs)
    const items = res.data

    // console.log(res.data)
    localStorage.setItem('books', JSON.stringify(items.books))
    return items.books
    }



