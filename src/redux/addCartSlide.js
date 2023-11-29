import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCart: [],
    quantity: 0,
    totalPrice: 0
  }

 export const addCartSlide = createSlice({
    name: 'addCart',
    initialState: initialState,
    reducers: {
        addCart: (state, action ) => {
            state.productCart.push(action.payload)
            state.quantity += 1
            state.totalPrice = state.productCart.reduce((sum, product) => sum + product.price, 0)
        }
    }
 })

 export const {addCart} = addCartSlide.actions
 export default addCartSlide.reducer