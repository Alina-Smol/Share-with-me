import $api from "./userContext";


export const bookingConfirmation = async (inputs)=>{
    console.log('inputs', inputs)
    const res = await $api.post("/bookingconfirmation", inputs)
}