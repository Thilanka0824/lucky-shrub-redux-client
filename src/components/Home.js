import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ScheduleCall from "./ScheduleCall";
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
import FloatingButton from "./FloatingButton";
import HomeHero from "./hero/HomeHero";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   dispatch(authCheck());
  // }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/image-assets/home-main-photo-lucky-shrub.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          paddingTop: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          {/* Wrapped buttons in a Box and adjusted styling */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Button
              variant="contained"
              href="/designpackages"
              sx={{
                backgroundColor: theme.palette.common.white,
                color: theme.palette.common.black,
                borderRadius: 2,
                minWidth: "18rem",
                minHeight: "3.5rem",
                marginBottom: theme.spacing(1),
                ":hover": {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Explore Design Packages
            </Button>
            <CallScheduling />
          </Box>
        </Container>
        <FloatingButton />
      </Box>
      <HomeHero />
      <ScheduleCall />
    </>
  );
};

export default Home;

/*
<Container maxWidth="lg">
        <Box maxWidth="xs" m={3}>
          <Typography variant="h1">Please Login</Typography>
          <CallScheduling />
        </Box>
        {auth ? (
          <Button 
          variant="contained" 
          onClick={() => dispatch(authLogout())}>
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
*/
