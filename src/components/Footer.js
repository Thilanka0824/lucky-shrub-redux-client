import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[500]
            : theme.palette.grey[800],
        minHeight: "10vh",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          color: "white",
          borderTop: "2rem solid #4E5A44",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#323232"
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          {/* Upper half */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            {/* Upper left half */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Email input */}
              <Input
                placeholder="Email"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 1,
                  marginBottom: 1,
                }}
              />
              {/* Social media links */}
              <Box sx={{ display: "flex" }}>
                <IconButton color="inherit" size="large">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" size="large">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" size="large">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Upper right half */}
            <Box sx={{ textAlign: "left" }}>
              <Link color="inherit" href="/">
                Home
              </Link>
            </Box>
          </Box>

          {/* Lower half */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
              marginBottom: 0,
            }}
          >
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
