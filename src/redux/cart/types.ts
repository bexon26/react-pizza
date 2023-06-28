

export type CartItem = {
   _id:string;
   title:string;
   titleEN:string
   description:string;
  
   weight:number;
   price:number;
   imageUrl:string;
   count:number;
   category:number;
   userId:string|null;
}

export type CartUser = {
  
   dishes:[]
   userId:string|null;
   count:number;
}


export interface CartSliceState {
 totalPrice: number;
 items:CartItem[]
}