import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import contactUs from "../lib/contactUs";
import DesignCompTable from "./DesignCompTable";
import ScheduleCall from "./ScheduleCall";
import FloatingButton from "./FloatingButton";

export const imageAssets = [
  "/image-assets/full-yard.jpg",
  "/image-assets/back-yard.png",
  "/image-assets/small-space.png",
  "/image-assets/front-yard.webp",
  "/image-assets/curb-appeal.png",
  "/image-assets/outdoor-transformation.webp",
  "/image-assets/Botanical.webp",
  "/image-assets/premium.webp",
  "/image-assets/dont-see-package.jpg",
];

export const imagesSecondCard = [
  "/image-assets/full-yard/full-yard-2.webp",
  "/image-assets/back-yard/back-yard-2.webp",
  "/image-assets/small-space/small-space-4.webp",
  "/image-assets/front-yard/front-yard-3.webp",
  "/image-assets/curb-appeal/curb-appeal-4.png",
  "/image-assets/outdoor-transformation/outdoor-2.webp",
  "/image-assets/botanical/botanical-2.png",
  "/image-assets/premium/premium-3.webp",
  "/image-assets/full-yard/full-yard-10.webp",
];
export const imagesThirdCard = [
  "/image-assets/full-yard/full-yard-3.webp",
  "/image-assets/back-yard/back-yard-5.webp",
  "/image-assets/small-space/small-space-2.webp",
  "/image-assets/front-yard/front-yard-8.webp",
  "/image-assets/curb-appeal/curb-appeal-7.webp",
  "/image-assets/outdoor-transformation/outdoor-1.webp",
  "/image-assets/botanical/botanical-3.webp",
  "/image-assets/premium/premium-2.webp",
  "/image-assets/full-yard/full-yard-10.webp",
];

export const dataObject = [
  {
    id: "0",
    title: "Full Yard",
    description: "Redesign the landscaping and more for your entire property",
    image: imageAssets[0],
    secondCard: imagesSecondCard[0],
    thirdCard: imagesThirdCard[0],
    price: { standardLot: 1695, largeLot: 2395 },
    boldFace:
      "Refresh the landscaping, hardscaping and more for your entire property",
    listItems: [
      "Front yard, backyard and side yard design",
      "Custom plant selection and layout",
      "Hardscaping and lighting design",
      "Shoppable furniture and decor",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "1",
    title: "Back Yard",
    description: "Refresh your backyard landscaping, patio, and more",
    image: imageAssets[1],
    secondCard: imagesSecondCard[1],
    thirdCard: imagesThirdCard[1],
    price: { standardLot: 1395, largeLot: 1995 },
    boldFace:
      "Refresh your backyard landscaping, patio, and more to create your dream space",
    listItems: [
      "Backyard and side yard design",
      "Custom plant selection and layout",
      "Hardscaping and lighting design",
      "Shoppable furniture and decor",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "2",
    title: "Small Space",
    description: "Transform your small space into a beautiful oasis",
    image: imageAssets[2],
    secondCard: imagesSecondCard[2],
    thirdCard: imagesThirdCard[2],
    price: {standardLot: 995},
    boldFace: "Turn your small patio, side yard, or rooftop into a mini oasis",
    listItems: [
      "Must be <500 sq feet of design-able space (one single, continuous area)",
      "Custom plant selection and layout",
      "Hardscaping and lighting design",
      "Styling, including furniture and decor recommendations",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "3",
    title: "Front Yard",
    description: "Redesign your front yard landscaping",
    image: imageAssets[3],
    secondCard: imagesSecondCard[3],
    thirdCard: imagesThirdCard[3],
    price: { standardLot: 1095, largeLot: 1695 },
    boldFace: "Refresh your front yard landscaping, walkways and more",
    listItems: [
      "Front yard, backyard and side yard design",
      "Custom plant selection and layout",
      "Hardscaping and lighting design",
      "Shoppable furniture and decor",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "4",
    title: "Curb Appeal",
    description: "Make your home the envy of the neighborhood",
    image: imageAssets[4],
    secondCard: imagesSecondCard[4],
    thirdCard: imagesThirdCard[4],
    price: {standardLot: 1795, largeLot: 2495},
    boldFace:
      "Reimagine your front landscaping and home exterior to boost curb appeal",
    listItems: [
      "Front yard, backyard and side yard design",
      "Custom plant selection and layout",
      "Hardscaping and lighting design",
      "Shoppable furniture and decor",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "5",
    title: "Outdoor Transformation",
    description: "Ready to fully transform your property?",
    image: imageAssets[5],
    secondCard: imagesSecondCard[5],
    thirdCard: imagesThirdCard[5],
    price: {standardLot:2495, largeLot: 3095},
    boldFace:
      "Refresh the landscaping, hardscaping and more for your entire property",
    listItems: [
      "Front yard, backyard and side yard design",
      "Home exterior design, including paint, windows, garage door, entry, roof and exterior hardware",
      "Lighting, furniture and decor recommendations",
      "Shoppable furniture and decor",
      "Seamless process—from design to installation support",
    ],
  },
  {
    id: "6",
    title: "Botanical",
    description: "Add a touch of greenery to your home",
    image: imageAssets[6],
    secondCard: imagesSecondCard[6],
    thirdCard: imagesThirdCard[6],
    price: {standardLot: 895},
    boldFace:
      "Refresh your yard’s plants, trees, and groundcover with a custom planting design",
    listItems: [
      "Plant palette, selections and layout based on your style, climate and goals",
      "3D visualization of your design",
      "Design for front yard, backyard, and adjacent side yards",
      "Seamless process—from design to installation support",
      "Note: not available for yards larger than 1/2 acre",
    ],
  },
  {
    id: "7",
    title: "Premium",
    description:
      "Our most customizable design service, with extra hands-on support",
    image: imageAssets[7],
    secondCard: imagesSecondCard[7],
    thirdCard: imagesThirdCard[7],
    price: {standardLot:3495, largeLot: 4095},

    boldFace:
      "Our most personalized design service, with extra hands-on support to redesign your entire property with ease",
    listItems: [
      "Flexible scope that can include home exterior design and landscaping for all yards",
      "Planting, hardscaping, lighting design and furniture recommendations",
      "Calls with your team throughout the design process",
      "Additional design revision",
      "Seamless process—from design to installation support",
    ],
  },
  {
    title: "Don't see a package?",
    description: "We can create a custom package for you",
    image: imageAssets[8],
    price: "Contact Us",
    contact: () => {
      // Replace this with the actual function to navigate to the contact page
      contactUs();
    },
  },
];
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const buttonStyleBlack = {
  color: "black",
  backgroundColor: "white",
  // border: "1px solid black",
  // borderRadius: "25px",
  mb: 1,
  ":hover": {
    backgroundColor: "#4E5A44",
    borderColor: "black",
    color: "white",
  },
};
const buttonStyleWhite = {
  color: "black",
  backgroundColor: "transparent",
  border: "1px solid black",
  ":hover": {
    backgroundColor: "transparent",
    borderColor: "black",
    color: "black",
  },
};

const theme = createTheme();

export default function Album() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main style={{ backgroundColor: "#F7f5f4" }}>
      {" "}
      {/* change this marginTop once i figure out how to make the background fill the entire container  */}
      {/* Hero unit */}
      <Box
        sx={{
          // backgroundColor: "",
          mt: 0,
          pt: 16, //pt i
          pb: 1,
        }}
      >
        <Container maxWidth="lg" sx={{}}>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Landscape Design Packages
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Our expert team of designers will help you create the outdoor space
            of your dreams. Whether refreshing the plants in your yard or
            planning a complete outdoor transformation, we have a package or
            you!
          </Typography>
        </Container>
      </Box>
      {/* End hero unit */}
      <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
          {dataObject.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Grow in={checked}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingBottom: "75%",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        objectFit: "cover",
                      }}
                      image={item.image}
                      alt={item.title}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {item.contact
                        ? ""
                        : item.price.standardLot
                        ? `$${item.price.standardLot}`
                        : `$${item.price}`}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    {item.contact ? (
                      <Button
                        variant="outlined"
                        size="large"
                        sx={buttonStyleBlack}
                        onClick={item.contact}
                      >
                        {item.price}
                      </Button>
                    ) : (
                      <>
                        <Button
                          component={Link}
                          to={`/designpackages/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          variant="outlined"
                          size="large"
                          sx={{ ...buttonStyleBlack, ml: 2 }}
                        >
                          View Details
                        </Button>
                      </>
                    )}
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ScheduleCall />
      <Container
        sx={{ py: 8, backgroundColor: "inherit", minHeight: "70vh" }}
        maxWidth="xl"
      >
        <DesignCompTable />
      </Container>
      <Container
        sx={{
          py: 8,
          backgroundColor: "#f7f5f3",
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
              {" "}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  margin: "0 2rem 2rem 2rem",
                  backgroundColor: "#E5E7E3",
                  padding: "1rem",
                }}
              >
                We're here to help
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Arsenal', sans-serif",
                  fontWeight: 400,
                  fontSize: "2.5rem",
                  margin: "2rem 2rem 0 2rem", //top right bottom left
                }}
              >
                Need Help Choosing a Package
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
                Hardscaping and landscaping and planting, oh my! Answer a few
                questions about your unique property, goals, and timeline, and
                we'll help you select the right design package.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={buttonStyleBlack}
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
                src="https://yardzen.com/wp-content/uploads/Yardzen_Animation4_crop.gif"
                alt="Yardsen"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <FloatingButton />
    </main>
  );
}
// py is the padding on the top and bottom
// px is the padding on the left and right
