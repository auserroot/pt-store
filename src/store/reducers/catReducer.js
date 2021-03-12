/* eslint-disable import/no-anonymous-default-export */
import { CATEGORY_INIT_DATA } from "../actionTypes";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORY_INIT_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
