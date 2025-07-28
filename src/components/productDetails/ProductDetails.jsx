import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Button from "../button/Button";

import styles from "./ProductDetails.module.css";
import StarRating from "../starRating/StarRating";
import VisaCard from "../../assets/bankCards/visa.svg";
import MasterCard from "../../assets/bankCards/mastercard.svg";
import ExpressCard from "../../assets/bankCards/express.svg";
import DiscoverCard from "../../assets/bankCards/discover.svg";

function SizeSelector({ sizes, onSizeChange, selectedSize }) {
  return (
    <div className={styles.sizeSelector}>
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          className={`${styles.sizeButton} ${
            selectedSize === size ? styles.selected : ""
          }`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");
  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id.toString() === productId)
  );

  if (!product) {
    return <div style={{ textAlign: "center" }}>Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    setError("");
    dispatch(addToCart({ ...product, selectedSize }));
    setSelectedSize(null);
  };

  return (
    <div className={styles.detailPage}>
      <h2 className={styles.detailPageHeader}>Product Details & Features</h2>
      <div className={styles.detailCard}>
        <div className={styles.detailImage}>
          <img
            src={
              product.image.startsWith("/")
                ? product.image
                : `/${product.image}`
            }
            alt={product.title}
            loading="lazy"
            decoding="async"
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.title}</h2>
          <h3 className={styles.productPrice}>
            Price: ${product.price.toFixed(2)}
          </h3>
          <StarRating rating={product.rating} />
          <h3 className={styles.productDescription}>{product.description}</h3>
          <div className={styles.addSizeWrapper}>
            <SizeSelector
              sizes={product.sizes || []}
              onSizeChange={setSelectedSize}
              selectedSize={selectedSize}
            />
            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              bg="#224abe"
              className={styles.addCart}
            >
              Add to Cart
            </Button>
          </div>

          <div className={styles.bankCards}>
            <img src={VisaCard} alt="VisaCard" />
            <img src={MasterCard} alt="MasterCard" />
            <img src={DiscoverCard} alt="discoverCard" />
            <img src={ExpressCard} alt="ExpressCard" />
          </div>
          {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
