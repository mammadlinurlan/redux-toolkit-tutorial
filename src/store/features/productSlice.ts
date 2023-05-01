import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;
export interface IProduct {
    image: string,
    price: number,
    name: string,
    stock: number,
    _id: string
}

interface ProductState {
    products: IProduct[]
}

const initialState: ProductState = {
    products: []
}

export const fetchProducts = createAsyncThunk("product/fetch", async (thunkAPI) => {
    const response = await fetch('http://localhost:3000/fortype', {
        method: "GET"
    })
    const data = response.json()
    return data;
})

export const savePerson = createAsyncThunk(
    "person/save",
    async (name: string, thunkAPI) => {
        const response = await fetch("http://localhost:3000/person", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
            }),
        });
        const data = await response.json();
        return data;
    },
);

export const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<{
            image: string,
            price: number,
            name: string,
            stock: number
        }>) => {
            state.products.push({
                _id: String(state.products.length),
                image: action.payload.image,
                price: action.payload.price,
                stock: action.payload.stock,
                name: action.payload.name
            })
        },
        reloadState : (state , action : PayloadAction<{
            productsArray : IProduct[]
        }>) => {
            state.products = action.payload.productsArray
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(savePerson.fulfilled, (state, action) => {
            state.products.push(action.payload);
        });
    }
})

export default ProductSlice.reducer
export const { addProduct,reloadState } = ProductSlice.actions