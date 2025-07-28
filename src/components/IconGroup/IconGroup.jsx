import { useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function IconGroup() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const cartItems = useSelector((state) => state.cart.items) || [];
  const wishlistItems = useSelector((state) => state.wishlist.items) || [];

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );
  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? 1 : 2,
        pr: isMobile ? "12px" : "24px",
      }}
    >
      <Tooltip title="Wishlist">
        <IconButton
          component={Link}
          to="/wishlist"
          color="inherit"
          aria-label="wishlist"
        >
          <Badge badgeContent={wishlistCount} color="error">
            <Favorite fontSize={isMobile ? "medium" : "large"} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Cart">
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          aria-label="cart"
        >
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCart fontSize={isMobile ? "medium" : "large"} />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default IconGroup;
