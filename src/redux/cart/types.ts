

export type CartItem = {
   id:string;
   title:string;
   description:string;
   weight:number;
   price:number;
   image:string;
   count:number;
}


export interface CartSliceState {
 totalPrice: number;
 items:CartItem[]
}