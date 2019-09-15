import { Component, OnInit } from '@angular/core';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../services/shared-service.service';
import { IAlert } from '../Models/ialert.model';

@Component({
  selector: 'app-productdetailspage',
  templateUrl: './productdetailspage.component.html',
  styleUrls: ['./productdetailspage.component.css']
})
export class ProductdetailspageComponent implements OnInit {

  productDetails: Productdetails;
  id: number;

  public alerts: Array<IAlert> = [];
  productAddedTocart: Productdetails[];
  productAddedTofavourites: Productdetails[];
  cartItemCount: number = 0;
  favouriteItemCount: number = 0;

  constructor(private router: ActivatedRoute,
    private productService: ProductService,
    private sharedService: SharedServiceService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('===========>', this.id);
      this.productService.getProductDetail(this.id).subscribe((t: Productdetails) => {
        this.productDetails = t;
        console.log('-------------> ', this.productDetails);
      });
    });
  }

  OnAddCart(product: Productdetails) {
    console.log(product);

    this.productAddedTocart = this.productService.getProductFromCart();

    //this.productService.addProductToCart(product);

    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(product);
      this.productService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);

    }
    else {
      let tempProduct = this.productAddedTocart.find(p => p.productname == product.productname);
      if (tempProduct == null) {
        this.productAddedTocart.push(product);
        this.productService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        //setTimeout(function(){ }, 2000);
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
      else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }

    }
    console.log(this.cartItemCount);
    this.cartItemCount = this.productAddedTocart.length;
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateCartCount(this.cartItemCount);
  }

  OnAddFavourite(product: Productdetails) {
    console.log(product);

    this.productAddedTofavourites = this.productService.getProductFromFavourites();

    //this.productService.addProductToCart(product);

    if (this.productAddedTofavourites == null) {
      this.productAddedTofavourites = [];
      this.productAddedTofavourites.push(product);
      this.productService.addProductToFavourites(this.productAddedTofavourites);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);

    }
    else {
      let tempProduct = this.productAddedTofavourites.find(p => p.productname == product.productname);
      if (tempProduct == null) {
        this.productAddedTofavourites.push(product);
        this.productService.addProductToFavourites(this.productAddedTofavourites);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        //setTimeout(function(){ }, 2000);
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
      else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }

    }
    console.log(this.favouriteItemCount);
    this.favouriteItemCount = this.productAddedTofavourites.length;
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateFavouriteCount(this.favouriteItemCount);
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}





