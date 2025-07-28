import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTES, NAV_LINKS, NAV_IMAGES } from "../../routes/Routes";
import IconGroup from "../IconGroup/IconGroup";
import NavDrawer from "../navDrawer/NavigationDrawer";
import Navbar from "../navbar/NavBar";
import styles from "./Header.module.css";
import Logo from "../sharedComponents/logo/Logo";
import SearchBar from "../searchBar/SearchBar";
function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleOpenDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <div className={styles.header}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isMobile && (
            <IconButton
              onClick={handleOpenDrawer}
              color="inherit"
              aria-label="open menu"
              className={styles.burgerMenu}
              sx={{ order: 1 }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}

          <Box
            sx={{
              order: isMobile ? 2 : 1,
              paddingLeft: isMobile ? 0 : "24px",
            }}
          >
            <Logo fontSizePx="32px" />
          </Box>
        </Box>

        <IconGroup />
      </Box>

      {!isMobile ? (
        <Toolbar
          sx={{
            width: "100%",
            background: "#fff",
            color: "#000",
          }}
        >
          <Navbar />

          <SearchBar />
        </Toolbar>
      ) : (
        <NavDrawer
          drawerOpen={drawerOpen}
          handleCloseDrawer={handleCloseDrawer}
          NAV_LINKS={NAV_LINKS}
          NAV_IMAGES={NAV_IMAGES}
          ROUTES={ROUTES}
          sx={{ paddingLeft: "0" }}
        />
      )}
    </div>
  );
}

export default Header;
