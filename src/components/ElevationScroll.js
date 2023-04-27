import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import { Link } from "@mui/material";
import { Avatar } from "@mui/material";
import { authLogout } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";


const drawerWidth = 240;
const navItems = ["Design Packages", "How It Works", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ElevateAppBar(props) {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth.isAuth);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item === "Design Packages" ? "/designpackages" : ""}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Scroll to elevate App bar
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                gap: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#000000" }}
                  component={Link}
                  to={item === "Design Packages" ? "/designpackages" : ""}
                >
                  {item}
                </Button>
              ))}

              {auth ? (
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    gap: 1,
                  }}
                >
                  <Button
                    sx={{ color: "#000000", textTransform: "none" }}
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(authLogout());
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to="/"
                      sx={{
                        color: "inherit",
                        border: "1px solid #000000",
                        borderRadius: "5px",
                        pt: "1px",
                        pb: "1px",
                        pl: "5px",
                        pr: "5px",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <Typography variant="h6">Logout</Typography>
                    </Link>
                  </Button>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "none", md: "flex" },
                      gap: 1,
                    }}
                  >
                    <IconButton component={RouterLink} to="/cart">
                      <Badge badgeContent={totalQuantity} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Box>

                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                        }}
                      >
                        {user ? user.username[0] : "U"}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      {user ? user.username[0] : "U"}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </React.Fragment>
  );
}

export default ElevateAppBar;
