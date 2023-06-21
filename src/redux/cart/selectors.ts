import { RootState } from "../store";

export const selectCart = (state : RootState) => state.cart;

export const selectCartItemById = (_id:string) => (state:RootState) => state.cart.items.find((obj) => obj._id === _id);
