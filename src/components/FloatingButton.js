import React, { useState } from "react";
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Grid,
  Typography,
  Box,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Floating action button */}
      <Fab
        variant="extended"
        onClick={handleClickOpen}
        sx={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
          backgroundColor: "black",
          color: "white",
          borderRadius: 0,
          ":hover": {
            backgroundColor: "black",
          },
        }}
      >
        Get Inspired
        <CloseIcon
          fontSize="small"
          sx={{ marginLeft: "0.5rem", color: "white" }}
        />
      </Fab>

      {/* Dialog component */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Grid container>
          {/* Left side of the dialog */}
          <Grid item xs={12} md={6}>
            <img
              src="/image-assets/stock-photo-girl-in-red.jpeg"
              alt="Inspiration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Right side of the dialog */}
          <Grid item xs={12} md={6} textAlign={"center"}>
            {/* Centered content in a column */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              sx={{ padding: "2rem", backgroundColor: "#f7f5f3" }}
            >
              {/* Logo */}
              <Link
                component={RouterLink}
                to="/"
                sx={{ justifySelf: "center" }}
              >
                <img
                  src="/image-assets/lucky-shrub-red.png"
                  alt="Logo"
                  width="85rem"
                  style={{ margin: 7, cursor: "pointer" }}
                />
              </Link>

              {/* Dialog content */}
              <DialogContent>
                <Typography variant="body1" align="center">
                  Be the first to get expert design tips, exclusive promotions,
                  and project deep dives.
                </Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                />
              </DialogContent>

              {/* Dialog actions */}
              <DialogActions sx={{ width: "100%" }}>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    mb: 2,
                    minHeight: "3rem",
                  }}
                >
                  Sign Up Now
                </Button>
              </DialogActions>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default FloatingButton;
