import {configureStore} from '@reduxjs/toolkit'
import addCartSlide from './addCartSlide'

export const store = configureStore({
    reducer: {
        addCartItem: addCartSlide
    },
})