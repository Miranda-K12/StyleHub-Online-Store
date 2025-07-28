import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Logo({ fontSizePx = "36px", color = "#fff" }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const adjustedFontSize = isMobile ? "24px" : fontSizePx;

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoStyle = {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: adjustedFontSize,
    color,
    cursor: "pointer",
    textTransform: "uppercase",
  };

  return (
    <span style={logoStyle} onClick={handleClick}>
      StyleHub
    </span>
  );
}

export default Logo;
