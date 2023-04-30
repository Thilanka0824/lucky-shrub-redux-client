import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  authCheck,
  authFailure,
  authLogout,
  authSuccess,
} from "../redux/authSlice";
import { checkAuthToken } from "../lib/checkAuthToken";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CallScheduling from "./CallScheduling";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    // let authy = checkAuthToken()
    // authy ? dispatch(authSuccess())
    // :
    // dispatch(authFailure())
    dispatch(authCheck());
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url('/image-assets/home-main-photo-lucky-shrub.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingTop: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="xs" m={3}>
          <Typography variant="h1">Please Login</Typography>
          <CallScheduling />
        </Box>
        {auth ? (
          <Button variant="contained" onClick={() => dispatch(authLogout())}>
            Logout
          </Button>
        ) : (
          <>
            <Button variant="contained" href="/login">
              Login
            </Button>
            <Button variant="contained" href="/register">
              Register
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Home;
