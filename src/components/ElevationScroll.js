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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Design Packages", "How It Works", "Contact"];
const settings = [
  { text: "Profile", route: "/profile" },
  { text: "Account", route: "/account" },
  { text: "Dashboard", route: "/dashboard" },
  { text: "Logout", route: "/" },
];

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
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleProfileClick = () => {
    if (!auth) {
      navigate("/login");
    } else {
      handleOpenUserMenu();
    }
  };

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
              <MenuIcon />
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
                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((item) =>
                      item.text === "Logout" ? (
                        <MenuItem
                          key={item.text}
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(authLogout());
                            handleCloseUserMenu();
                          }}
                          component={RouterLink}
                          to={item.route}
                        >
                          {item.text}
                        </MenuItem>
                      ) : (
                        <MenuItem
                          key={item.text}
                          onClick={handleCloseUserMenu}
                          component={RouterLink}
                          to={item.route}
                        >
                          {item.text}
                        </MenuItem>
                      )
                    )}
                  </Menu>
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
