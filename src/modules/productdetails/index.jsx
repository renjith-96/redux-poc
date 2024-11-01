import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "./actions";
import Loader from "../common/components/loader";
import Error from "../common/components/Error";
import { addItemTocart, removeItemFromCart } from "../cart/actions";
import { getCartItems } from "../cart/selectors";
import { getProductDetailSelector } from "./selectors";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const {
    productDetail: details,
    hasErrors,
    loading,
  } = useSelector(getProductDetailSelector);
  const cartItems = useSelector(getCartItems);

  useEffect(() => {
    dispatch(getProductDetail({ productId }));
  }, [dispatch, productId]);

  const renderButton = () => {
    const isItemInCart = cartItems.find((item) => item.id === details.id);
    if (isItemInCart) {
      return (
        <button onClick={() => dispatch(removeItemFromCart(details))}>
          Remove from cart
        </button>
      );
    }
    return (
      <button onClick={() => dispatch(addItemTocart(details))}>
        Add to cart
      </button>
    );
  };

  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <Loader loading={loading} />
      <Error showError={hasErrors} error={"Unable to display details."} />
      {details && (
        <React.Fragment>
          <img src={details?.thumbnail} alt={details?.name} />
          <h3>Name : {details?.title}</h3>
          <h3>Description : {details?.description}</h3>
          <h3>Price : {details?.price}</h3>
          <h3>Brand : {details?.brand}</h3>
          {renderButton()}
          <h3>Reviews :</h3>
          <div>
            {details?.reviews?.map((review, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <p>Name : {review?.reviewerName}</p>
                <p>Rating : {review?.rating}</p>
                <p>Comment : {review?.comment}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ProductDetail;
