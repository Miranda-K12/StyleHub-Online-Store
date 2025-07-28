import styles from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const { orangeStars, greyStars } =
    rating >= 4.5
      ? { orangeStars: 5, greyStars: 0 }
      : rating >= 3.5
      ? { orangeStars: 4, greyStars: 1 }
      : rating >= 2.5
      ? { orangeStars: 3, greyStars: 2 }
      : rating >= 1.5
      ? { orangeStars: 2, greyStars: 3 }
      : rating >= 0.5
      ? { orangeStars: 1, greyStars: 4 }
      : { orangeStars: 0, greyStars: 5 };

  const renderStars = (count, fill) =>
    [...Array(count)].map((_, i) => (
      <svg
        key={`${fill}-${i}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        className={styles.star}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));

  return (
    <div className={styles.starRating}>
      {renderStars(orangeStars, "#ffa600")}
      {renderStars(greyStars, "#D0CCCC")}
      <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
