import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../constants";

export const getProductDetail = (payload) => ({
  type: GET_PRODUCT_DETAILS,
  payload,
});

export const getProductDetailSuccess = (payload) => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload,
});

export const getProductDetailFailure = () => ({
  type: GET_PRODUCT_DETAILS_FAILURE,
});
