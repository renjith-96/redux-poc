import { combineReducers } from "redux";

import productReducer from "../modules/products/reducer";
import productDetailReducer from "../modules/productdetails/reducer";
import cartReducer from "../modules/cart/reducers";

const rootReducer = combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cart : cartReducer
});

export default rootReducer;
