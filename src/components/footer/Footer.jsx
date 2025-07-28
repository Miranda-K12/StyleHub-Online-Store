import React from "react";

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
const contacts = [
  {
    title: "StyleHub Central Office",
    lines: ["3886 New Street, Paris, France M7D", "+(991) 452 169 789"],
  },
  {
    title: null,
    lines: [
      "Rustaveli Avenue 120, Tbilisi",
      "+(995) 123 456 789",
      <a key="email" href="mailto:StyleHub@mail.com">
        StyleHub@mail.com
      </a>,
    ],
  },
];
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Logo />
      </div>

      {contacts.map(({ title, lines }, i) => (
        <div key={i} className={styles.column}>
          {title && <p>{title}</p>}
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      ))}

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
