import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../features/products/productSlice";
import ProductCard from "../../../components/productCard/ProductCard";
import styles from "./Categorypage.module.css";
import SwiperLayout from "../../../components/swiper/Swiper";

function CategoryPage({ category, layout = "grid" }) {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (loading) return <div className={styles.status}>Loading...</div>;
  if (error) return <div className={styles.status}>Error: {error}</div>;
  if (filteredProducts.length === 0)
    return <div className={styles.status}>No products found.</div>;

  return (
    <div className={styles.categoryPage}>
      {layout === "grid" ? (
        <div className={styles.productList}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <SwiperLayout products={filteredProducts} />
      )}
    </div>
  );
}

export default CategoryPage;
