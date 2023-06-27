import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { fetchCart } from '../dish/asynkActions';

import { CartItem, CartSliceState } from './types';



const {items, totalPrice} = getCartFromLS()

const initialState:CartSliceState = {
  totalPrice,
  items
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action:PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    

    minusItem(state, action:PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj._id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    removeItem(state, action:PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj._id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    //  Получение корзины для каждого пользователя
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => { 
      console.log(action)
      state.items = [...action.payload]
      
      // state.items = action.payload;
   });
  }
});



// export const selectCarTotalPrice = (state) => state.cart.totalPrice;

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
