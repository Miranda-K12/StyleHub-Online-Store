// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Woman from "../pages/woman/Woman";
import Man from "../pages/man/Man";
import Kids from "../pages/kids/Kids";
import WishList from "../pages/wishlist/Wishlist";
import Cart from "../pages/cart/Cart";

import { ROUTES } from "./Routes";
import ProductDetails from "../components/productDetails/ProductDetails";
const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.WOMAN} element={<Woman />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route path={ROUTES.MAN} element={<Man />} />
    <Route path={ROUTES.KIDS} element={<Kids />} />
    <Route path="/wishlist" element={<WishList />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
