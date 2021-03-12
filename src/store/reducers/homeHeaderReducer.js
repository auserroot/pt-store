/* eslint-disable import/no-anonymous-default-export */
import {
  HOME_INIT_INFORMATION_DATA,
  HOME_INIT_SEARCH_DATA,
} from "../actionTypes";
const initialState = {
  informationsData: [],
  searchData: [],
};

export default (state = initialState, { type, payload }) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case HOME_INIT_INFORMATION_DATA:
      newState.informationsData = payload;
      break;
    case HOME_INIT_SEARCH_DATA:
      newState.searchData = payload;
      break;
    default:
      break;
  }
  return newState;
};
