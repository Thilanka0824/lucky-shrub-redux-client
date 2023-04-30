import React from 'react'
import { Grid, Typography, TextField, Button, Paper, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import buttonStyleBlack from "../styles/buttonStyleBlack";
import contactUs from '../lib/contactUs';


const ScheduleCall = () => {
  return (
    
      <Container
        sx={{
          py: 8,
          backgroundColor: "#E5E7E3",
          minHeight: "50vh",
          minWidth: "100vw",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box>
              {" "}
              {/* this box on the left */}
              <img
                src="/image-assets/yardsen-picture.webp"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              {" "}
              {/* this box on the right */}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 400,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Unsure where to start?
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Arsenal, sans-serif",
                  fontWeight: 400,
                  fontSize: "2.5rem",
                  margin: "0 2rem 2rem 2rem",
                }}
              >
                Talk to a designer today!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'Arsenal', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  margin: "2rem",
                }}
              >
                Our designers are here to help you create the outdoor space of
                your dreams. Whether you need help with plant selection, layout,
                or just need some inspiration, we are here to help!
              </Typography>
              <Button
                variant="outlined"
                size="large"
                // sx={buttonStyleBlack}
                onClick={() => contactUs()}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    
  );
}

export default ScheduleCall