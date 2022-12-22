import $api from "./userContext";


export const cancellationReservation = async (inputs) => {
    //console.log('inputs', inputs)
    const res = await $api.post("/cancellationreservation", inputs)
}