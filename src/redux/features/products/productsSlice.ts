import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from "../../../types/Product";
import { fetchAllProducts } from "./productsThunk";

export interface ProductsState {
  baseProducts: Product[]
  sortedProducts: Product[]
  selectedProducts: Array<number>
  totalVolume: number
  totalQty: number
}

const initialState: ProductsState = {
  baseProducts: [],
  sortedProducts: [],
  selectedProducts: [],
  totalVolume: 0,
  totalQty: 0
};

export const productsSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    searchByField: (state, action) => {
      console.log(action.payload)
      state.sortedProducts = state.baseProducts.filter((el) => el[action.payload.field as keyof Product]?.toLocaleString().includes(action.payload.value))
    },
    changeProductSelectedStatus: (state, action) => {
      if (!action.payload.selected) {
        state.selectedProducts.push(action.payload.id)
      } else {
        state.selectedProducts.splice(state.selectedProducts.indexOf(action.payload.id), 1)
      }
    },
    changeAllSelectedStatus: (state, action) => {
      if (!action.payload) {
        state.selectedProducts = []
        state.sortedProducts.forEach((el) => state.selectedProducts.push(el.id))
      } else {
        state.selectedProducts = []
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state: ProductsState, {payload}) => {
      if (!payload || payload.length < 1) return
      let modifyProducts: Product[] = payload.map((el, index) => {
        state.totalVolume += el.volume
        state.totalQty += el.qty
        return {
          ...el,
          total_sum: el.sum + el.qty
        }
      })
      modifyProducts = [...state.baseProducts, ...modifyProducts]
      state.baseProducts = modifyProducts.sort((a, b) => +new Date(a.delivery_date) - +new Date(b.delivery_date))
      state.sortedProducts = state.baseProducts
    })
  },
});

export const {
  changeProductSelectedStatus,
  searchByField,
  changeAllSelectedStatus,
} = productsSlice.actions;

export default productsSlice.reducer;
