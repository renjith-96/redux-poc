import { API_URL } from "../../../appconstants";

const getProducts = async () =>
  fetch(`${API_URL}?limit=10`)
    .then((res) => res.json())
    .then((json) => json?.products);
export { getProducts };
