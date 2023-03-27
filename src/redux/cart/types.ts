

export type CartItem = {
   id:string;
   title:string;
   description:string;
   price:number;
   image:string;
   type:string;
   size:number;
   count:number;
}


export interface CartSliceState {
 totalPrice: number;
 items:CartItem[]
}