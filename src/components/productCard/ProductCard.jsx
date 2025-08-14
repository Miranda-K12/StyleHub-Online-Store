import React, { useMemo, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import StarRating from "../starRating/StarRating";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = useMemo(
    () => wishlistItems.some((item) => item.id === product.id),
    [wishlistItems, product.id]
  );

  const toggleWishlist = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isInWishlist) {
        dispatch(removeFromWishlist(product.id));
      } else {
        dispatch(addToWishlist(product));
      }
    },
    [dispatch, isInWishlist, product]
  );

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={`${product.title} product image`}
            loading="lazy"
            decoding="async"
            className={styles.imageWrapperImage}
          />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.productHeader}>
            <p className={styles.productPrice}>
              <strong>${Number(product.price).toFixed(2)}</strong>
            </p>
            <IconButton
              style={{ color: "#e63946" }}
              onClick={toggleWishlist}
              className={styles.wishlistIcon}
              aria-label={
                isInWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorder />}
            </IconButton>
          </div>
          <StarRating rating={product.rating} />
          <h3 className={styles.productName}>{product.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
