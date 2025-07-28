import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../sharedComponents/logo/Logo";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import YouTube from "@mui/icons-material/YouTube";

const socialsIcons = [
  {
    mediaName: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com",
  },
  { mediaName: "YouTube", icon: <YouTube />, url: "https://www.youtube.com" },
  {
    mediaName: "LinkedIn",
    icon: <LinkedIn />,
    url: "https://www.linkedin.com",
  },
  {
    mediaName: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>

      <div className={styles.column}>
        <p>StyleHub Central Office</p>
        <p>3886 New Street, Paris, France M7D</p>
        <p>+(991) 452 169 789</p>
      </div>

      <div className={styles.column}>
        <p>Rustaveli Avenue 120, Tbilisi</p>
        <p>+(995) 123 456 789</p>
        <p>
          <a href="mailto:StyleHub@mail.com">StyleHub@mail.com</a>
        </p>
      </div>

      <div className={styles.column}>
        <div className={styles.socials}>
          {socialsIcons.map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
