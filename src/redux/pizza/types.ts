export type Pizza = {
   id:string; 
   title:string;
   description: string;
   titleEN:string;
   descriptionEN: string;  
   weight:number;
   price:number; 
   image:string; 

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