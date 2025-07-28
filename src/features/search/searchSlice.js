import { createSlice, createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.items;
const selectSearchQuery = (state) => state.search.query;
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchQuery],
  (products = [], query) => {
    if (!query) return products;
    return products.filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
);

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
