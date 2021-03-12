import { getNavTit } from "../../axios/axios";
import { CATEGORY_RIGHT_TIT } from "../actionTypes";

export const initCategoryRightNavAction = (params) => {
  return async (dispatch) => {
    let res = await getNavTit();
    dispatch({
      type: CATEGORY_RIGHT_TIT,
      payload: {
        rightNav: res.data,
      },
    });
  };
};
