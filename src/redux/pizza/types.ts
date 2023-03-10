export type Pizza = {
   id:string; 
   title:string; 
   price:number; 
   image:string; 
   sizes:number[]; 
   types:number[];
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
 
 

 
 export type SearchPizzaParams= {
   order:string;
   sortBy:string;
   category:string; 
   search:string;
   currentPage:string;
 }