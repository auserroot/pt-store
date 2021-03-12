// @ts-nocheck
import { HOME_ADD_ACTION,HOME_INIT_SWIPER_DATA,HOME_INIT_CENTER_DATA,HOME_INIT_PURCHASE_DATA,HOME_INIT_GROUPSHOP_DATA,HOME_INIT_INFORMATION_DATA,HOME_INIT_SEARCH_DATA} from "../actionTypes"
import { getSwiperData , getCenterData,getPurchaseData,getGroupShopData,getInformationsData,getSearchData} from "../../axios/axios"
export const homeAddAction = {
    type:HOME_ADD_ACTION,
    payload:{
        data:[]
    }
}
export const homeInitSwiperDataAction = (params)=>{
    return async (dispatch)=>{
        let res = await getSwiperData();
        dispatch({
            type:HOME_INIT_SWIPER_DATA,
            payload:{
                swiperData:res.data
            }
        })
    }
}
export const homeInitCenterDataAction = (params)=>{
    return async (dispatch)=>{
        let res = await getCenterData();
        dispatch({
            type:HOME_INIT_CENTER_DATA,
            payload:res.data
    })
}}
export const homeInitPurchaseDataAction = (params)=>{
   
    return async (dispatch)=>{
        let res = await getPurchaseData();
        
        dispatch({
            type:HOME_INIT_PURCHASE_DATA,
            payload:res.data
    })
}}

export const homeInitGroupShopDataAction = (params)=>{
   
    return async (dispatch)=>{
        let res = await getGroupShopData();
        
        dispatch({
            type:HOME_INIT_GROUPSHOP_DATA,
            payload:res.data
    })
}}

export const homeInitInformationDataAction = (params)=>{
   
    return async (dispatch)=>{
        let res = await getInformationsData();
        
        dispatch({
            type:HOME_INIT_INFORMATION_DATA,
            payload:res.data
    })
}}

export const homeInitSearchDataAction = (params)=>{
   
    return async (dispatch)=>{
        let res = await getSearchData();
        
        dispatch({
            type:HOME_INIT_SEARCH_DATA,
            payload:res.data
    })
}}