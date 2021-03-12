import {MY_ADD_ACTION,MY_INIT_BALANCE,MY_INIT_ICON,MY_INIT_ICONS,MY_INIT_USER} from "../actionTypes"
import {getbalance,geticon,geticons,getuser } from "../../axios/axios"
export const myAddBalance = {
    type:MY_ADD_ACTION,
    payload:{
        data:[]
    }
}
//balance
export const myInitBalanceAction = (params)=>{
    return async(dispatch)=>{
        let res = await getbalance();
        dispatch({
            type:MY_INIT_BALANCE,
            payload:{
            swiperData:res
            }
        })
    }
}

//icon
export const myInitIconAction = (params)=>{
    return async(dispatch)=>{
        let res = await geticon();
        dispatch({
            type:MY_INIT_ICON,
            payload:{
            iconData:res
            }
        })
    }
}

//icons
export const myInitIconsAction = (params)=>{
    return async(dispatch)=>{
        let res = await geticons();
        dispatch({
            type:MY_INIT_ICONS,
            payload:{
            iconsData:res
            }
        })
    }
}

export const myInitUserAction = (params)=>{
    return async(dispatch)=>{
        let res = await getuser();
        dispatch({
            type:MY_INIT_USER,
            payload:{
            userData:res
            }
        })
    }
}