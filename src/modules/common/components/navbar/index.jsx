import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
import { getCartItems } from "../../../cart/selectors";

const Navbar = () => {
  const items = useSelector(getCartItems);

  return (
    <div className="nav">
      <div className="item">
        <Link to={"/"}>{"Product"}</Link>
      </div>
      <div className="cart item">
        <Link to={"/cart"}>
          {"Cart"} {items.length ? `(${items.length})` : null}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
