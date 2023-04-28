import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { authLogout } from "../redux/authSlice";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip } from "@mui/material";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;
const navItems = ["Design Packages", "How It Works", "Contact"];
const settings = [
  { text: "Profile", route: "/profile" },
  { text: "Account", route: "/account" },
  { text: "Dashboard", route: "/dashboard" },
  { text: "Logout", route: "/" },
];

function ElevateAppBar() {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth.isAuth);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  //this is for the drawer
  const container = undefined;

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
              component={RouterLink}
              to={item === "Design Packages" ? "/designpackages" : ""}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Link component={RouterLink} to="/">

            <img
              src="/image-assets/lucky-shrub-green.png"
              alt="Logo"
              width="35rem"
              style={{ margin: 7, cursor: "pointer" }}
            />
            </Link>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton component={RouterLink} to="/cart">
                <Badge badgeContent={totalQuantity} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      backgroundColor: (theme) => theme.palette.secondary.main,
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
          </Box>
        </Toolbar>
      </AppBar>

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