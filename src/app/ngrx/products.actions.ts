
import {Action} from '@ngrx/store';

export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS="[Products] Get All Products",
  GET_ALL_PRODUCTS_Success="[Products] Get All Products Success",
  GET_ALL_PRODUCTS_Fail="[Products] Get All Products Fail",
}

export class GetAllProductsAction implements Action{
  readonly type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsSuccessAction implements Action{
  readonly type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_Success;
  constructor(public payload:any) {
  }
}

export class GetAllProductsFailAction implements Action{
  readonly type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_Fail;
  constructor(public payload:string) {
  }
}

export type ProductsActions = GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsFailAction;
