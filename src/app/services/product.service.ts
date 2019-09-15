import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // private url = 'http://jsonplaceholder.typicode.com/posts';
  private url2 = 'http://localhost:8080/products';
  private url3 = 'http://localhost:8080/products/add';
  //private url3 = 'http://localhost:8080/products/add';



  constructor(private http: HttpClient) { 
  }

  // getpost()
  // {
  //   return this.http.get(this.url);
  // }

  getproduct()
  {
    return this.http.get(this.url2);
  }

  // savepost(post)
  // {
  //   return this.http.post(this.url, JSON.stringify(post));
  // }

  getProductDetail(id: number) {
    return this.http.get<Productdetails>(`http://localhost:8080/products/${id}`);
  }

  saveProduct(ProductDetails : Productdetails)
  {
   // let productdetails2 : Productdetails =  {"Adddi","dammi","shoeews",52,45,"2",2};
    console.log("On Save clicked 2");
    this.http.post(this.url3, ProductDetails).subscribe();
  }

  addProductToCart(products: any) {
    localStorage.setItem("productcart", JSON.stringify(products));
  }

  removeProductFromCart(products: any) {
    localStorage.setItem("productcart", JSON.stringify(products));
  }

  addProductToFavourites(products: any) {
    localStorage.setItem("productfav", JSON.stringify(products));
  }

  removeProductFromFavourites(products: any) {
    localStorage.setItem("productfav", JSON.stringify(products));
  }

  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('productcart'));
  }

  getProductFromFavourites() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('productfav'));
  }


}
