import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // {id: {item, quantity}}
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items[item.id];

      if (!existingItem) {
        state.items[item.id] = {
          ...item,
          quantity: 1,
        };
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items[itemId];

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        delete state.items[itemId];
      }
    },
    updateItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const existingItem = state.items[itemId];

      if (existingItem && newQuantity > 0) {
        const quantityDifference = newQuantity - existingItem.quantity;
        state.totalQuantity += quantityDifference;
        existingItem.quantity = newQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity} = cartSlice.actions;

export default cartSlice.reducer;