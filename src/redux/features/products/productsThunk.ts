import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from "../../../types/Product";

export const fetchAllProducts = createAsyncThunk(
  'products/getAll',
  async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "");

    if (response.ok) {
      const data = await response.json();
      return data as Product[];
    } else {
      console.log('Ooops, error: ', response.status);
    }
  },
);
