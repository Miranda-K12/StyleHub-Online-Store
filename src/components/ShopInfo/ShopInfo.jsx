import styles from "./ShopInfo.module.css";

function ShopCard({ imageSrc, title }) {
  return (
    <div className={styles.ShopWrapper}>
      <div className={styles.ShopImageContainer}>
        <img
          src={imageSrc}
          alt={title}
          className={styles.ShopImage}
          loading="lazy"
        />
      </div>
      <h3 className={styles.shopTitle}>{title}</h3>
    </div>
  );
}

export default ShopCard;
