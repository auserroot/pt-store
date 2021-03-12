import { MYORDER_INIT_ORDER } from "../actionTypes";

const initialState = {
    orderData: [],
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case MYORDER_INIT_ORDER:
        return { ...state, ...payload };
      default:
        break;
    }
    return state;
  };