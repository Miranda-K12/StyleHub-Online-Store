// Navbar.jsx
import { Link } from "react-router-dom";
import { ROUTES, NAV_LINKS } from "../../routes/Routes";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const navLinks = [
    { label: NAV_LINKS.HOME, path: ROUTES.HOME },
    { label: NAV_LINKS.WOMAN, path: ROUTES.WOMAN },
    { label: NAV_LINKS.MAN, path: ROUTES.MAN },
    { label: NAV_LINKS.KIDS, path: ROUTES.KIDS },
    { label: NAV_LINKS.SUMMER_COLLECTION, path: ROUTES.SUMMER_COLLECTION },
    { label: NAV_LINKS.SALE, path: ROUTES.SALE },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={link.path} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
