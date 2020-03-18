import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  product_api_url='http://localhost:3000/tbl_products';
  constructor(private http:HttpClient) { }

  // returns all records 
  GetAllProducts():Observable<any>
  {
    return this.http.get(this.product_api_url);
  }

  // return 2 two records based on the Name
  GetAllproductsByname(produtname:string):Observable<any>
  {
    let url=this.product_api_url + '?pname=' + produtname;
    return this.http.get(url);
  }

  GetProcuctsBYnameandPrice(productname:string,price:number):Observable<any>
  {
    let url=this.product_api_url + '?pname=' + productname +'&price='+price;
    return this.http.get(url);
  }

  InsertNewProduct(formdata):Observable<any>
  {
    return this.http.post(this.product_api_url,{
      "pname":formdata.txt_pname,
      "price":formdata.txt_price
    });
    
  }



}
