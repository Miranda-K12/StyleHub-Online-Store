import styles from "./Category.module.css";
import { useNavigate } from "react-router-dom";

function CategoryCard({ imageSrc, title, route }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <div
      className={styles.cardWrapper}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className={styles.CategoryImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
}
export default CategoryCard;
