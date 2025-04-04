import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const respone = await axios.get('https://fakestoreapi.com/products');
    return respone.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default productSlice.reducer;