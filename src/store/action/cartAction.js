import { getCartMsg, getCouponMsg } from '../../axios/axios'
import {
  CART_ADD_GOODS,
  CART_ALL_SELECT,
  CART_CHANGE_SELECT,
  CART_COUPON_MSG,
  CART_DEL_GOODS,
  CART_GET_MSG,
  CART_MANAGE_ALL_SELECT,
  CART_MANAGE_CHANGE_SELECT,
  CART_SUB_GOODS,
  CART_USE_COUPON
} from '../actionTypes'

export function getCartMsgAction(payload) {
  return (dispatch)=> {
    getCartMsg(payload).then(res=>{
      if(res) {
        dispatch({
          type: CART_GET_MSG,
          payload: res.data
        })
      }
    })
  }
}

export function changeSelectAction(payload) {
  return {
    type: CART_CHANGE_SELECT,
    payload
  }
}

export function allSelectAction(payload) {
  return {
    type: CART_ALL_SELECT,
    payload
  }
}

export function addGoodsAction(payload) {
  return {
    type: CART_ADD_GOODS,
    payload
  }
}

export function subGoodsAction(payload) {
  return {
    type: CART_SUB_GOODS,
    payload
  }
}

export function changeManageSelectAction(payload) {
  return {
    type: CART_MANAGE_CHANGE_SELECT,
    payload
  }
}

export function manageAllSelectAction(payload) {
  return {
    type: CART_MANAGE_ALL_SELECT,
    payload
  }
}

export function delGoodsAction(payload) {
  return {
    type: CART_DEL_GOODS,
    payload
  }
}

export function getCouponMsgAction(params) {
  return (dispatch)=>{
    getCouponMsg(params).then(res=>{
      if(res){
        dispatch({
          type: CART_COUPON_MSG,
          payload: res.data
        })
      }
    })
  }
}

export function touchUseCouponAction(payload) {
  return {
    type: CART_USE_COUPON,
    payload
  }
}