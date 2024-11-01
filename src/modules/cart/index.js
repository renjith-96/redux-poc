import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./selectors";
import { removeItemFromCart } from "./actions";

const Cart = () => {
  const items = useSelector(getCartItems);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      <h3> Total: {items.reduce((acc, item) => acc + item.price, 0)}</h3> 
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid",
            padding: "10px",
            margin: "10px",
          }}
        >
          <img src={item.thumbnail} alt={item.title} height={50} width={50} />
          <h3>{item.title}</h3>
          <h3>{item.price}</h3>
          <button onClick={() => dispatch(removeItemFromCart(item))}>
            Remove
          </button>
        </div>
      ))}
      <br />
    </div>
  );
};
export default Cart;
