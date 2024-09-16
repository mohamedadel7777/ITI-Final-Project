import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
<<<<<<< HEAD
    totalQuantity: 0,
=======
    totalQuantity: 0 
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
<<<<<<< HEAD
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
=======
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;  
      } else {
        state.items.push({ ...newItem, quantity: 1 });  
      }
      state.totalQuantity += 1;  
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity -= 1;  
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
        }
        state.totalQuantity -= 1;
      }
    },
<<<<<<< HEAD
    updateQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        const oldQuantity = state.items[itemIndex].quantity;
          state.items[itemIndex].quantity = newQuantity;
          state.totalQuantity += newQuantity - oldQuantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
=======
  },
});

export const { addToCart, removeFromCart  } = cartSlice.actions;

export default cartSlice.reducer;
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
