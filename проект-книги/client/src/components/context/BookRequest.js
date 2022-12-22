import $api from "./userContext";

export const bookRequest = async ()=>{
    const res = await $api.get("/bookrequest")
    const items = res.data
    return items.books
}