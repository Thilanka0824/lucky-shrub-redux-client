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
      const existingItem = state.items[item.id]; // the bracket notation is used to access the property of an object using a variable. In this case, the variable is item.id. If we used dot notation, it would be state.items.item.id, which is not what we want. because we want to access the property of the object using the value of the variable item.id, not the string "item.id"

      // If item is not in cart, add it
      if (!existingItem) {
        state.items[item.id] = {
          ...item,
          quantity: 1,
          image: item.image,
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