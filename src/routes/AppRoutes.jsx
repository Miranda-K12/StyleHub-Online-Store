import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Loading = () => (
  <div style={{ textAlign: "center", padding: "20px", fontSize: "116px" }}>
    Loading...
  </div>
);

const Home = lazy(() => import("../pages/home/Home"));
const Woman = lazy(() => import("../pages/woman/Woman"));
const Man = lazy(() => import("../pages/man/Man"));
const Kids = lazy(() => import("../pages/kids/Kids"));
const WishList = lazy(() => import("../pages/wishlist/Wishlist"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const ProductDetails = lazy(() =>
  import("../components/productDetails/ProductDetails")
);

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/woman" element={<Woman />} />
      <Route path="/man" element={<Man />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
