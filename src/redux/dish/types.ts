export type Dish = {
  _id:string;
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
   count:Number;
   status1: 'loading' | 'success' | 'error'
 }
 
 export type MetaDishParams= {
  arg:string
}

 
 export type SearchDishParams= {
   order:string;
   sortBy:string;
   category:string; 
   search:string;
   currentPage:string;
 }