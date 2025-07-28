import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const initialState = savedCart;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.items.findIndex(
        (item) =>
          item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (index !== -1) {
        state.items[index].quantity++;
        state.items[index].totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          selectedSize: newItem.selectedSize,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },

    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      const index = state.items.findIndex(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
      if (index === -1) return;

      const existingItem = state.items[index];

      state.totalQuantity--;
      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items.splice(index, 1);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },

    deleteItemFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      const index = state.items.findIndex(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
      if (index === -1) return;

      const existingItem = state.items[index];

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;
      state.items.splice(index, 1);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
