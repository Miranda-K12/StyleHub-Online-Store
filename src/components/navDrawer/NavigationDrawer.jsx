import React from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Logo from "../sharedComponents/logo/Logo";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "../searchBar/SearchBar";

const NavDrawer = ({
  drawerOpen,
  handleCloseDrawer,
  NAV_LINKS,
  NAV_IMAGES,
  ROUTES,
}) => {
  const navigate = useNavigate();
  const navEntries = Object.entries(NAV_LINKS);

  const handleSearch = (product) => {
    navigate(`/product/${product.id}`);
    handleCloseDrawer();
  };

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleCloseDrawer}
      disableEnforceFocus
      slotProps={{
        paper: {
          sx: {
            height: "auto",
            width: "100vw",
            overflow: "hidden",
            maxWidth: "100vw",
          },
        },
      }}
    >
      <Box
        sx={{
          padding: "24px",
          width: "100%",
          zIndex: "1000",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleCloseDrawer}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#224abe",
          }}
          aria-label="Close drawer"
        >
          <CloseIcon />
        </IconButton>

        <Logo color="#224abe" fontSizePx="32px" />
        <SearchBar
          style={{ width: "100%", marginTop: "16px" }}
          onSearch={handleSearch}
        />
        <List>
          {navEntries.map(([key, text]) => (
            <ListItem disablePadding key={key}>
              <ListItemButton
                component={Link}
                to={ROUTES[key] || "#"}
                onClick={handleCloseDrawer}
                sx={{
                  padding: "12px",
                  marginTop: "24px",
                  backgroundColor: "#224abe",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  "&:hover": {
                    backgroundColor: "#0d6efd",
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#fff",
                      fontWeight: "700",
                    },
                  }}
                />
                <Box
                  component="img"
                  backgroundColor="#fff"
                  src={NAV_IMAGES[key]}
                  alt={`${text} icon`}
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "5px",
                    objectFit: "contain",
                    marginRight: "16px",
                    flexShrink: 0,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
