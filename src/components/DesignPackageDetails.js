import * as React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { dataObject } from "./DesignPackages";
import fullYardImageSet from "./DesignPackages";
import { Carousel } from "react-responsive-carousel";
import { imageAssets } from "./DesignPackages";
import ImageCarousel from "./ImageCarousel";
import ScheduleCall from "./ScheduleCall";
import { List, ListItem, ListItemText } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const DesignPackageDetails = () => {
  const { title } = useParams();
  const packageData = dataObject.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!packageData) {
    return <div>Package not found</div>;
  }

  const { id, image, description, price } = packageData;

  console.log("Item ID:", id);

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ padding: 0, marginTop: "2rem" }}
        >
          {/* Image component */}
          <div
            style={{
              width: "100%",
              height: "60vh",
              overflow: "hidden",
            }}
          >
            <img
              src={packageData.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="package"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {/* Card component */}
          <Box sx={{ textAlign: "center", margin: "2rem" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {packageData.title} Design
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ margin: "1rem" }}
            >
              ${price}
            </Typography>
            <hr style={{ width: "20%" }} />

            {/* <Typography>{description}</Typography> */}
            <Typography
              fontWeight="bold"
              sx={{
                textAlign: "start",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              {packageData.boldFace}
            </Typography>

            <List>
              {packageData.listItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText>
                    <Typography variant="body1" component="span">
                      {`• ${item}`}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Button 1
              </Button>
              <Button variant="contained" color="secondary">
                Button 2
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Second hero */}
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} md={6} lg={6}>
          {/* Card component */}
          <Box sx={{ textAlign: "center", margin: "2rem" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              All design packages include:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <List>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Custom plant palette and layout
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - A dedicated and talented team including a landscape
                      designer, horticulturist and construction expert working
                      on your project
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Itemized plant list with photos, common and scientific
                      names, light and water requirements
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - CAD drawings to aid installation
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - High-quality, 3D renders to visualize your design
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - 1 round of design revisions, with option to purchase
                      additional revisions if needed
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Optional matching with a Yardzen Pro—a vetted local
                      contractor who can build your project*
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ padding: 0, marginTop: "2rem" }}
        >
          {/* Image component */}
          <div
            style={{
              width: "100%",
              height: "60vh",
              overflow: "hidden",
            }}
          >
            <img
              src={packageData.secondCard}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="package"
            />
          </div>
        </Grid>
      </Grid>
      {/* Third hero */}
      <Grid container spacing={0} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ padding: 0, marginTop: "2rem" }}
        >
          {/* Image component */}
          <div
            style={{
              width: "100%",
              height: "60vh",
              overflow: "hidden",
            }}
          >
            <img
              src={packageData.thirdCard}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="package"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {/* Card component */}
          <Box sx={{ textAlign: "center", margin: "2rem" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              All {packageData.title} packages include:
            </Typography>
            <Box
              sx={{
                backgroundColor: "#C3CBBE",
                borderRadius: "20px",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <List>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - 2 rounds of design revisions, with option to purchase
                      additional revisions
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Kick-off call to deeply understand your goals and vision
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Check-in calls during your design process 
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Landscaping design for entire property (front, back, and side yards)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Home exterior design (paint, siding, windows, roofing)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Hardscaping plan (paved areas, walkways, stairs,
                      decking, and more)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Elements and amenities (pergolas, fire pits, kitchens,
                      fences, and more)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Lighting design (pathway, uplighting, downlighting, and more)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={{ lineHeight: "1.5" }}>
                      - Curated furniture and decor recommendations
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ScheduleCall />
    </>
  );
};

export default DesignPackageDetails;