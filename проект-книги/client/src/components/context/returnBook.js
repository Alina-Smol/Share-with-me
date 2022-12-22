import $api from "./userContext";


export const ReturnBook =async () => {
    const res = await $api.get("/returnedbook")
    const items = res.data
    return items.books
}