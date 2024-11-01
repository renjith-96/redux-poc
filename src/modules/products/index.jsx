import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { getProductSelector } from "./selectors";
import Loader from "../common/components/loader";
import Error from "../common/components/Error";
import { addItemTocart, removeItemFromCart } from "../cart/actions";
import { getCartItems } from "../cart/selectors";

const Products = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    products: productData,
    hasErrors,
    loading,
  } = useSelector(getProductSelector);
  const cartItems = useSelector(getCartItems);

  useEffect(() => {
    let moounted = true;
    moounted && dispatch(getProducts());
    return () => (moounted = false);
  }, [dispatch]);

  // handles the route to people detail page
  const handleClick = (index) => {
    navigate(`/details/${index}`);
  };

  const renderButton = (details) => {
    const isItemInCart = cartItems.find((item) => item.id === details.id);
    return isItemInCart ? (
      <button onClick={() => dispatch(removeItemFromCart(details))}>
        Remove from cart
      </button>
    ) : (
      <button onClick={() => dispatch(addItemTocart(details))}>
        Add to cart
      </button>
    );
  };
  return (
    <div className="container">
      <h1>Product List</h1>
      <Loader loading={loading} />
      <Error
        showError={hasErrors}
        error={"Unable to display products."}
      />
      {productData.length ? (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Avaliable stock</th>
              <th>Delivery</th>
              <th>Details</th>
              <th style={{
                width: "100px",
              }}>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item, index) => (
              <tr key={item.title}>
                <td>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="50"
                    height="50"
                  />
                  {item.title}
                </td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.shippingInformation}</td>
                <td>
                  <button onClick={() => handleClick(index + 1)}>
                    Details
                  </button>
                </td>
                <td>{renderButton(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Products;
