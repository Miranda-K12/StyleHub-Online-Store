import React from "react";
import styles from "./Button.module.css";

function Button({
  children,
  bg = "#224abe",
  color = "#ffffff",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      style={{
        "--btn-bg": bg,
        "--btn-color": color,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
