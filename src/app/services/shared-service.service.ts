import { Injectable } from '@angular/core'; import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {


  constructor(private productService: ProductService) {
  }

  productAddedTocart: Productdetails[];
  productAddedTofav: Productdetails[];
  private currentCartCount = new BehaviorSubject(0);
  private currentFavCount = new BehaviorSubject(0);
  private currentcartMessage;
  private currentfavMessage;

  ngOnInit() {
    this.loadcart().asObservable();
    this.loadfav().asObservable();
  }

  loadcart() {
    this.productAddedTocart = this.productService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
    }
    this.currentCartCount = new BehaviorSubject(this.productAddedTocart.length);
    this.currentcartMessage = this.currentCartCount.asObservable();
    return this.currentcartMessage;
  }

  loadfav() {
    this.productAddedTofav = this.productService.getProductFromFavourites();
    if (this.productAddedTofav == null) {
      this.productAddedTofav = [];
    }
    this.currentFavCount = new BehaviorSubject(this.productAddedTofav.length);
    this.currentfavMessage = this.currentFavCount.asObservable();
    return this.currentfavMessage;
  }


  updateCartCount(count: number) {
    //console.log(this.currentcartMessage);
    this.currentCartCount.next(count)
  }

  updateFavouriteCount(count: number) {
    // console.log(this.currentfavMessage);
    this.currentFavCount.next(count)
  }
}

