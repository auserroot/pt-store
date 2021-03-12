/* eslint-disable import/no-anonymous-default-export */

import { HOME_INIT_SWIPER_DATA } from "../actionTypes";
const initialState = {
  swiperData: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HOME_INIT_SWIPER_DATA:
      return { ...state, ...payload };

    default:
      break;
  }
  return state;
};
