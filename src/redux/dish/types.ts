export type Dish = {
   id:string; 
   title:string;
   description: string;
   titleEN:string;
   descriptionEN: string;
   category:number; 
   raiting:number; 
   weight:number;
   price:number; 
   image:string; 
   
 }
 
 export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
 }
 
 
 export interface DishSliceState {
   items1: Dish[];
   status1: 'loading' | 'success' | 'error'
 }
 
 

 
 export type SearchDishParams= {
   order:string;
   sortBy:string;
   category:string; 
   search:string;
   currentPage:string;
 }