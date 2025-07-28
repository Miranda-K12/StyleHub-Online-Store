import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Logo({ fontSizePx = "36px", color = "#fff" }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const fontSize = isMobile ? "24px" : fontSizePx;

  return (
    <span
      onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize,
        color,
        cursor: "pointer",
        textTransform: "uppercase",
      }}
    >
      StyleHub
    </span>
  );
}

export default Logo;
