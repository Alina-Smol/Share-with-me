import $api from "./userContext";

export const createFindBook = async (inputs)=>{
    const res = await $api.post("/createfindbook", inputs)
    const items = res.data
    return items.books
}