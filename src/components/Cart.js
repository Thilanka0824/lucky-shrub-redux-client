import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Divider,
} from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { removeItem, updateItemQuantity } from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateItemQuantity = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, newQuantity }));
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Shopping Cart
      </Typography>
      {Object.values(cartItems).map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="span">
                {item.name}
              </Typography>
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
              <IconButton
                onClick={() => handleRemoveItem(item.id)}
                edge="end"
                color="error"
              >
                <RemoveCircleOutline />
              </IconButton>
            </Box>
          </CardContent>
          <Divider />
        </Card>
      ))}
    </Box>
  );
}
