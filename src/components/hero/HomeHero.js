import React from 'react'
import { Container, Grid, Box, Typography, List, ListItem } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import contactUs from '../../lib/contactUs'
import { useNavigate } from "react-router-dom"


const HomeHero = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          backgroundColor: "#f7f5f4",
          fontFamily: "'Arsenal', sans-serif",
          fontWeight: 200,
          fontSize: "2.5rem",
          margin: "2rem 2rem 0 2rem",
          textAlign: "center",
          margin: 10,
        }}
      >
        The easiest path to a yard you'll love
      </Typography>
      {/* First Hero */}
      <Container
        sx={{
          py: 8,
          backgroundColor: "#ffffff",
          minHeight: "50vh",
          minWidth: "100vw",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* this box on the left */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Custom design & styling for your unique property
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'Arsenal', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  margin: "2rem",
                }}
              >
                We’ll factor your style and how you want to live outside. In
                addition to sun and shade patterns, slope, your planting zone
                and all of your property’s unique characteristics.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                // sx={}
                onClick={() => contactUs()}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* this box on the right */}
            <Box>
              {" "}
              <img
                src="/image-assets/home-hero/home-1.jpeg"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Second Hero */}
      <Container
        sx={{
          py: 8,
          backgroundColor: "#ffffff",
          minHeight: "50vh",
          minWidth: "100vw",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* this box on the left */}
            <Box>
              {" "}
              <img
                src="/image-assets/home-hero/home-2.jpeg"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* this box on the right */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Simple yet thorough online process
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'Arsenal', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  margin: "2rem",
                }}
              >
                We use the latest in satellite imagery, visualization tools and
                data. Making it possible for us to design your dream outdoor
                space, all without ever stepping foot on your property.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                // sx={}
                onClick={() => contactUs()}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Third Hero */}
      <Container
        sx={{
          py: 8,
          backgroundColor: "#ffffff",
          minHeight: "50vh",
          minWidth: "100vw",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* this box on the left */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Everything you need to install
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'Arsenal', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  margin: "2rem",
                }}
              >
                <List>
                  <ListItem>
                    - Planting plan with layout, quantities and sizes
                  </ListItem>
                  <ListItem>
                    - Hardscaping plan with layout and materials
                  </ListItem>
                  <ListItem>
                    - Styling plan with shoppable furniture and decor
                  </ListItem>
                  
                  <ListItem>
                    - Photorealistic 3D renders to help you visualize
                  </ListItem>
                  <ListItem>- Contractor-ready CAD plans</ListItem>
                </List>
              </Typography>
              <Button
                variant="outlined"
                size="large"
                // sx={}
                onClick={() => contactUs()}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* this box on the right */}
            <Box>
              {" "}
              <img
                src="/image-assets/home-hero/home-3.jpeg"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Fourth Hero */}
      <Container
        sx={{
          py: 8,
          backgroundColor: "#ffffff",
          minHeight: "50vh",
          minWidth: "100vw",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* this box on the left */}
            <Box>
              {" "}
              <img
                src="/image-assets/home-hero/home-4.jpeg"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* this box on the right */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Including only the brands we trust
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'Arsenal', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  margin: "2rem",
                }}
              >
                We use the latest in satellite imagery, visualization tools and
                data. Making it possible for us to design your dream outdoor
                space, all without ever stepping foot on your property.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                // sx={}
                onClick={() => contactUs()}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomeHero