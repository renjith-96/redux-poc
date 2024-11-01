import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_DETAILS } from "../constants";
import { getProductDetailSuccess, getProductDetailFailure } from "../actions";
import { getProductDetail } from "../services";

// worker Saga: will be fired on GET_PRODUCTS actions
function* fetchProducts(action) {
  try {
    const productData = yield getProductDetail(action.payload.productId);
    yield put(getProductDetailSuccess(productData));
  } catch (e) {
    yield put(getProductDetailFailure());
  }
}

function* productDetailEffects() {
  yield takeLatest(GET_PRODUCT_DETAILS, fetchProducts);
}

export default productDetailEffects;
