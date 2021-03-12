import { combineReducers } from "redux";
import catReducer from "./catReducer";
import catLftNavReducer from "./catLftNavReducer";
import catRightNavReducer from "./catRightNavReducer";

import homeReducer from "./homeReducer";
import homeCenterReducer from "./homeCenterReducer";
import homeHeaderReducer from "./homeHeaderReducer";

import cart from "./cartReducer";

import myReducer from "./myReducer";
import myorderReducer from "./myorderReducer";

export default combineReducers({
  catLftNavReducer,
  catRightNavReducer,
  catReducer,
  cart,
  homeReducer,
  homeCenterReducer,
  homeHeaderReducer,
  myReducer,
  myorderReducer,
});
