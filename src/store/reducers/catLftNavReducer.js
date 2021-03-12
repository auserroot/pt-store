/* eslint-disable import/no-anonymous-default-export */
import { CATEGORY_LEFT_TIT } from "../actionTypes";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORY_LEFT_TIT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
