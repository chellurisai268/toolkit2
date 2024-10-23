import products from "./products.json"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products,
  cartItem:[]
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCard:(state,action)=>{
        state.cartItem.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCard} = productSlice.actions
const productReducer= productSlice.reducer
export default productReducer;