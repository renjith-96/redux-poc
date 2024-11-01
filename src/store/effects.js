import { all, fork } from "redux-saga/effects";
import productDetailEffects from "../modules/productdetails/effects";
import productEffects from "../modules/products/effects";

function* rootSaga() {
  yield all([
    fork(productEffects), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    fork(productDetailEffects),
  ]);
}

export default rootSaga;
