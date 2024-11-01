import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../constants";

export const initialState = {
  loading: true,
  hasErrors: false,
  productDetail: null,
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return { ...state, loading: true };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        productDetail: action.payload,
        loading: false,
        hasErrors: false,
      };
    case GET_PRODUCT_DETAILS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
