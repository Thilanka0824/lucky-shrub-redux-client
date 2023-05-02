import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { removeItem, updateItemQuantity } from "../redux/cartSlice";
import { CardMedia } from "@mui/material";


export default function Cart() {
  const theme = useTheme();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLargeLot, setIsLargeLot] = useState(false);

  useEffect(() => {
    const newTotalPrice = Object.values(cartItems).reduce(
      (accumulator, currentItem) => {
        return (
          accumulator +
          (isLargeLot && currentItem.price.largeLot
            ? currentItem.price.largeLot
            : currentItem.price.standardLot) *
            currentItem.quantity
        );
      },
      0
    );
    setTotalPrice(newTotalPrice);
    console.log("totalPrice", totalPrice);
  }, [cartItems, isLargeLot]);


  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateItemQuantity = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, newQuantity }));
  };
  // toggle isLargeLot state
  const toggleLotSize = () => {
    setIsLargeLot(!isLargeLot);
  };

  // this function will be called when the user clicks the purchase button
  const handlePurchase = () => {
    const payload = {
      cartItems,
      totalPrice,
      isLargeLot,
    };
    console.log("Payload:", payload);
    // Send the payload to the backend here
  };

  return (
    <Box
      sx={{
        margin: 12,
        "@media (max-width: 600px)": {
          margin: 6,
        },
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Cart
      </Typography>
      <Typography variant="h6" component="p">
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      {Object.values(cartItems).map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={2}>
                <Box display="flex" justifyContent="center">
                  <CardMedia
                    component="img"
                    sx={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      marginRight: 0,
                    }}
                    image={item.image}
                    alt={item.title}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" justifyContent="center">
                  <Typography variant="h6" component="span">
                    {item.title} $
                    {isLargeLot && item.price.largeLot
                      ? item.price.largeLot
                      : item.price.standardLot}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" justifyContent="center">
                  <Box>
                    <IconButton
                      onClick={() =>
                        handleUpdateItemQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <RemoveCircleOutline />
                    </IconButton>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      sx={{ marginX: 1 }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton
                      onClick={() =>
                        handleUpdateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Box display="flex" justifyContent="center">
                  <IconButton
                    onClick={() => handleRemoveItem(item.id)}
                    edge="end"
                    color="error"
                  >
                    <RemoveCircleOutline />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
        </Card>
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: 2,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: theme.palette.grey[700],
          color: theme.palette.grey[200],
          borderRadius: 2,
          minWidth: "18rem",
          minHeight: "3.5rem",
          marginBottom: theme.spacing(1),
          ":hover": {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          },
        }}
        onClick={handlePurchase}
      >
        Checkout
      </Button>
    </Box>
  );
}
