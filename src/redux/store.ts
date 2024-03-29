import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import dish from './dish/slice';
import pizza from './pizza/slice';
import {authReducer} from './auth/auth';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: { 
    filter, 
    cart, 
    pizza,
    dish,
    auth:authReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
