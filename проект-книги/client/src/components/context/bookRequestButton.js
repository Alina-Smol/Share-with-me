import $api from "./userContext";


export const bookRequestButton = async (inputs)=>{
    //console.log('inputs', inputs)
    const res = await $api.post("/bookrequestbutton", inputs)
}