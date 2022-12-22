import $api from "./userContext";

export const aboutBook = async ({idbookinstance})=>{
    const res = await $api.get(`/aboutbook/${idbookinstance}`)
    const items = res.data
    console.log('in', items.book[0])
    return items.book[0]
}