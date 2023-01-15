import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './slices/FilterSlice'
import cartSlice from './slices/cartSlices'


export const store = configureStore({
    reducer:{
       filter:filterSlice,
       cart:cartSlice
    }
})

console.log(store);