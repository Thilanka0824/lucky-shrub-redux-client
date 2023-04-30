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
} from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { removeItem, updateItemQuantity } from "../redux/cartSlice";
import { CardMedia } from "@mui/material";


export default function Cart() {
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
        Shopping Cart
      </Typography>
      <Typography variant="h6" component="p">
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      {Object.values(cartItems).map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={3} sm={2}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: 2,
                  }}
                  image={item.image}
                  alt={item.title}
                />
              </Grid>
              <Grid item xs={3} sm={4}>
                <Typography variant="h6" component="span">
                  {item.title} $
                  {isLargeLot && item.price.largeLot
                    ? item.price.largeLot
                    : item.price.standardLot}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
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
              </Grid>

              <Grid item xs={2} sm={2}>
                <IconButton
                  onClick={() => handleRemoveItem(item.id)}
                  edge="end"
                  color="error"
                >
                  <RemoveCircleOutline />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
        </Card>
      ))}
    </Box>
  );
}
