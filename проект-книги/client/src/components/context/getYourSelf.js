import $api from "./userContext";

export const getYourSelf = async () => {
    const res = await $api.get("/user")
    const items = res.data
    // console.log('data', res.data)
    // console.log('aboutme', items.user)
    //localStorage.setItem('aboutme', JSON.stringify(items.user))
    return items.user

}