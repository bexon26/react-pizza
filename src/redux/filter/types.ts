

export enum SortPropertyEnum {
   RATING_DESC = 'rating',
   RATING_ASC = '-rating',
   TITLE_DESC = 'title',
   TITLE_ASC = '-title',
   TTTLE_DESC_EN = 'titleEN',
   TTTLE_ASC_EN = '-titleEN',
   PRICE_DESC = 'price',
   PRICE_ASC = '-price'
 }
 
 export type Sort = {
   name: string;
   sortProperty:  SortPropertyEnum;
 }
 
 export interface FilterSliceState {
   searchValue: string;
   categoryId: number;
   currentPage: number;
   sort: Sort;
 }