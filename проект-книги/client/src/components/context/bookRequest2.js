import $api from "./userContext";

export const bookRequest2 = async ()=>{
    const res = await $api.get("/bookrequest2")
    const items = res.data
    return items.books
}