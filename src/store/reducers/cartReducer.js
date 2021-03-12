/* eslint-disable import/no-anonymous-default-export */

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
  CART_USE_COUPON,
} from "../actionTypes";

const initState = {
  goodsList: [],
  couponList: [],
  couponPrice: 0,
};

export default (state = initState, { type, payload }) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case CART_GET_MSG:
      newState.goodsList = payload;
      break;
    case CART_CHANGE_SELECT:
      newState.goodsList[payload.idx].selected = !payload.flag;
      break;
    case CART_ALL_SELECT:
      newState.goodsList.forEach((el) => {
        el.selected = !payload.flag;
      });
      break;
    case CART_ADD_GOODS:
      if (
        newState.goodsList[payload.idx].cart_num ===
        newState.goodsList[payload.idx].total_num
      ) {
        return newState;
      } else {
        newState.goodsList[payload.idx].cart_num += payload.num;
      }
      break;
    case CART_SUB_GOODS:
      if (newState.goodsList[payload.idx].cart_num === 1) {
        return newState;
      } else {
        newState.goodsList[payload.idx].cart_num -= payload.num;
      }
      break;
    case CART_MANAGE_CHANGE_SELECT:
      newState.goodsList[payload.idx].manage_selected = !payload.flag;
      break;
    case CART_MANAGE_ALL_SELECT:
      // eslint-disable-next-line array-callback-return
      newState.goodsList.map((el) => {
        el.manage_selected = !payload.flag;
      });
      break;
    case CART_DEL_GOODS:
      newState.goodsList = newState.goodsList.filter((el) => {
        return el.manage_selected === false;
      });
      break;
    case CART_COUPON_MSG:
      newState.couponList = payload;
      break;
    case CART_USE_COUPON:
      newState.couponPrice = payload;
      break;
    default:
      break;
  }
  return newState;
};
