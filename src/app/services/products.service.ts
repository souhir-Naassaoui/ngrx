import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + "/products");
  }
  getProduct(id:number):Observable<Product>{
    const host = environment.host;
    return this.http.get<Product>(host + "/products/"+id);
  }
  updateProduct(product:Product):Observable<Product>{
    const host = environment.host;
    return this.http.put<Product>(host + "/products/"+product.id,product);
  }

  getSelectedProducts():Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + "/products?selected=true");
  }

  getAvailableProducts():Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + "/products?available=true");
  }
  searchProducts(keyword:any):Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + "/products?name_like="+keyword);
  }
  selectProduct(p:Product):Observable<Product>{
    const host = environment.host;
    p.selected=!p.selected;
    return this.http.put<Product>(host + "/products/"+p.id,p);
  }
  delete(p:Product):Observable<void>{
    const host = environment.host;
    return this.http.delete<void>(host+"/products/"+p.id);
  }
  save(p:Product):Observable<Product>{
    const host = environment.host;
    return this.http.post<Product>(host+"/products",p);
  }
}
