/* eslint-disable import/no-anonymous-default-export */
import {
  HOME_INIT_CENTER_DATA,
  HOME_INIT_PURCHASE_DATA,
  HOME_INIT_GROUPSHOP_DATA,
} from "../actionTypes";
const initialState = {
  purchaseData: [],
  centerData: [],
  groupShopData: [],
};

export default (state = initialState, { type, payload }) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case HOME_INIT_CENTER_DATA:
      newState.centerData = payload;
      break;
    case HOME_INIT_PURCHASE_DATA:
      newState.purchaseData = payload;
      break;
    case HOME_INIT_GROUPSHOP_DATA:
      newState.groupShopData = payload;
      break;
    default:
      break;
  }
  return newState;
};
