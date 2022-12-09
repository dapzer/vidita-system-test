import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from "../../../types/Product";
import { fetchAllProducts } from "./productsThunk";

export interface ProductsState {
  baseProducts: Product[]
  sortedProducts: Product[]
}

const initialState: ProductsState = {
  baseProducts: [],
  sortedProducts: []
};

export const productsSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    searchByField: (state, action) => {
      state.sortedProducts = state.baseProducts.filter((el) => el[action.payload.field as keyof Product].toLocaleString().includes(action.payload.value))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state: ProductsState, {payload}) => {
      state.baseProducts = payload?.sort((a, b) => +new Date(a.delivery_date) - +new Date(b.delivery_date)) || []
      state.sortedProducts = state.baseProducts
    })
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
