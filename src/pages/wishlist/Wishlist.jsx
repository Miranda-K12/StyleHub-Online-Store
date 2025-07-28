import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCallback, useMemo } from "react";
import styles from "./Wishlist.module.css";
import wishListIcon from "/assets/wishlist/wishlist.svg";
import StarRating from "../../components/starRating/StarRating";
function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeFromWishlist(id));
    },
    [dispatch]
  );
  const renderedWishlist = useMemo(() => {
    return wishlistItems.map((item) => (
      <div
        key={item.id}
        className={styles.wishlistCard}
        style={{ position: "relative" }}
      >
        <Link to={`/product/${item.id}`} className={styles.link}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.wishlistImage}
            loading="lazy"
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h3 className={styles.wishlistCardHeader}>{item.title}</h3>
          <StarRating rating={item.rating} />
          <p style={{ marginTop: "12px" }}>${item.price.toFixed(2)}</p>
        </Link>
        <IconButton
          aria-label="Remove from wishlist"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(item.id);
          }}
          style={{
            color: "#e63946",
            width: "40px",
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
    ));
  }, [wishlistItems, handleRemove]);

  return (
    <div className={styles.wishlistPage}>
      {wishlistItems.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <h2 className={styles.wishlistHeader}>
            You have no items in your wishlist.
          </h2>
          <img
            src={wishListIcon}
            alt="wishlist"
            className={styles.wishlistIcon}
          />
          <h3 className={styles.wishlistBoxText}>
            You have not added any items to your wishlist yet, Click on the
            little heart symbol on the items.
          </h3>
        </div>
      ) : (
        <>
          <h2 className={styles.wishlistTitle}>My Wishlist</h2>
          <div className={styles.wishlistGrid}>{renderedWishlist}</div>
        </>
      )}
    </div>
  );
}

export default Wishlist;
