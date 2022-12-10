import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from "../../../types/Product";

export const fetchAllProducts = createAsyncThunk(
  'products/getAll',
  async (path?: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}` || "");

    if (response.ok) {
      const data = await response.json();
      return data.data as Product[];
    } else {
      console.log('Ooops, error: ', response.status);
    }
  },
);

export const postCancelProduct = createAsyncThunk(
  'products/cancel',
  async (selectedProducts?: Array<number>) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FAVORITE_API}/delete`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selectedProducts,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Ooops, error: ', response.status);
    }
  },
);
