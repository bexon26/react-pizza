import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { RootState } from '../store';
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
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
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
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    removeItem(state, action:PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});



// export const selectCarTotalPrice = (state) => state.cart.totalPrice;

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;