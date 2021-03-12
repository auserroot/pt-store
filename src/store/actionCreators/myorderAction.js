import {MYORDER_INIT_ORDER,MY_ADD_ACTION} from "../actionTypes"
import {getorder } from "../../axios/axios"
export const myAddBalance = {
    type:MY_ADD_ACTION,
    payload:{
        data:[]
    }
}

export const myInitOrderAction = (params)=>{
    return async(dispatch)=>{
        let res = await getorder();
        dispatch({
            type:MYORDER_INIT_ORDER,
            payload:{
            orderData:res
            }
        })
    }
}