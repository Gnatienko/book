import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity += 1;
      }
    },
    increaseItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else if (item) {
        state.items = state.items.filter(i => i.id !== action.payload);
        state.totalQuantity -= 1;
      }
    },
    deleteItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addItem, increaseItem, decreaseItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;