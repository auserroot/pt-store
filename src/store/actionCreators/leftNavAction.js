import { getListTit } from "../../axios/axios";
import { CATEGORY_LEFT_TIT } from "../actionTypes";

export const initCategoryLeftNavAction = (params) => {
  return async (dispatch) => {
    let res = await getListTit();
    dispatch({
      type: CATEGORY_LEFT_TIT,
      payload: {
        leftNav: res.data,
      },
    });
  };
};
