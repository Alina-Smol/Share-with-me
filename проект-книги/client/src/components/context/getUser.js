import $api from "./userContext";


export const getUser = async ({iduser})=>{

    const res = await $api.get(`/getuser/${iduser}`)
    const items = res.data
    console.log(items)
    return items.user
}