import { API_URL } from "../../../appconstants";

const getProductDetail = async (productID) =>
  fetch(`${API_URL}/${productID}`)
    .then((res) => res.json())
    .then((data) => data);
export { getProductDetail };
