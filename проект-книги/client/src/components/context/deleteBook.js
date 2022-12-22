import $api from "./userContext";


export const deleteBook = async (inputs)=>{
    //console.log('inputs', inputs)
    const res = await $api.post("/deletebook", inputs)
}