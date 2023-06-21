export type Pizza = {
   _id:string; 
   title:string;
   description: string;
   titleEN:string;
   descriptionEN: string;  
   weight:number;
   raiting:number;
   price:number; 
   image:string; 
   admin:boolean;
 }
 
 export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
 }
 
 
 export interface PizzaSliceState {
   items: Pizza[];
   status: 'loading' | 'success' | 'error'
 }
 
 

 
//  export type SearchPizzaParams= {
//    order:string;
//    sortBy:string;
//    category:string; 
//    search:string;
//    currentPage:string;
//  }