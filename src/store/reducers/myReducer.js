import { MY_INIT_BALANCE } from "../actionTypes";
import { MY_INIT_ICON } from "../actionTypes";
import { MY_INIT_ICONS } from "../actionTypes";
import { MY_INIT_USER } from "../actionTypes";

const initialState = {
  swiperData: [],
  iconData: [],
  iconsData: [],
  userData: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MY_INIT_BALANCE:
      return { ...state, ...payload };
    case MY_INIT_ICON:
      return { ...state, ...payload };
    case MY_INIT_ICONS:
      return { ...state, ...payload };
    case MY_INIT_USER:
      return { ...state, ...payload };
    default:
      break;
  }
  return state;
};
