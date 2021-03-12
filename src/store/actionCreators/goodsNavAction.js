import { getGoodsData } from "../../axios/axios";
import { CATEGORY_INIT_DATA } from "../actionTypes";

export const initCategoryDataAction = (params) => {
  return async (dispatch) => {
    let res = await getGoodsData();
    dispatch({
      type: CATEGORY_INIT_DATA,
      payload: {
        category: res.data,
      },
    });
  };
};
