import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';
import { SharedServiceService } from '../services/shared-service.service';
import { BinaryOperator } from '@angular/compiler';

@Component({
  selector: 'app-favouritepage',
  templateUrl: './favouritepage.component.html',
  styleUrls: ['./favouritepage.component.css']
})
export class FavouritepageComponent implements OnInit {

  posts: object;
  productAddedTofav: Productdetails[];
  favouriteItemCount: number = 0;
  productAddedTocart: Productdetails[];
  cartItemCount: number = 0;
  bol = [];
  tembol: boolean = false;
  ret = [];

  boomlea = [];

  constructor(private productService: ProductService, private sharedService: SharedServiceService) { }

  ngOnInit() {

    this.getfavitems();

  }

  getfavitems() {

    this.productAddedTofav = this.productService.getProductFromFavourites();
    this.productAddedTocart = this.productService.getProductFromCart();
    this.getMatch(this.productAddedTocart, this.productAddedTofav);

    this.posts = this.productAddedTofav;
  }

  getMatch(cartitems: Productdetails[], favitems: Productdetails[]) {

    let FinalArray = [];

    if (cartitems==null)
    {
      cartitems=[]
    }
    if (favitems==null)
    {
      favitems=[]
    }

    for (let i = 0; i < favitems.length; ++i) {
      let temp = favitems[i];
      let found = false;

      for (let j = 0; j < cartitems.length; ++j) {
        if (cartitems[j].productid === temp.productid) {
          found = true;
          break;
        }
      }

      if (found) {
        FinalArray.push(temp);
      }
    }

    console.log(FinalArray);

    for (let i = 0; i < favitems.length; ++i) {
      let temp = favitems[i];
      let found = false;

      for (let j = 0; j < FinalArray.length; ++j) {
        if (FinalArray[j].productid === temp.productid) {
          found = true;
          break;
        }
      }

      if (found) {
        this.boomlea.push(false);
      }
      if (!found) {
        this.boomlea.push(true);
      }


    }
    console.log(this.boomlea);
    console.log(this.boomlea[0]);
    console.log(this.boomlea[1]);
    console.log(this.boomlea[2]);

  }


  onRemoveCart(product: Productdetails) {
    console.log(product);
    this.boomlea=[];

    this.productAddedTofav = this.productService.getProductFromFavourites();

    if (this.productAddedTofav == null) {
      console.log("The item is null or is deleted already");
    }
    else {
      let tempProductindex = this.productAddedTofav.findIndex(p => p.productid == product.productid);
      if (tempProductindex == null) {
        console.log("The item is does not exist in localstorage");
      }
      else {
        this.productAddedTofav.splice(tempProductindex, 1);
        this.productService.removeProductFromFavourites(this.productAddedTofav);
        console.log("The item is deleted now");
        this.getfavitems();
      }

    }

    this.getMatch(this.productAddedTocart, this.productAddedTofav);
    console.log(this.favouriteItemCount);
    this.favouriteItemCount = this.productAddedTofav.length;
    this.sharedService.updateFavouriteCount(this.favouriteItemCount);
  }

  onAddToCartFromFav(product: Productdetails) {
    console.log(product);

    this.productAddedTocart = this.productService.getProductFromCart();

    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(product);
      this.productService.addProductToCart(this.productAddedTocart);

      console.log(this.cartItemCount);
      this.cartItemCount = this.productAddedTocart.length;
      this.sharedService.updateCartCount(this.cartItemCount);

    }
    else {
      let tempProduct = this.productAddedTocart.find(p => p.productname == product.productname);
      if (tempProduct == null) {
        this.productAddedTocart.push(product);
        this.productService.addProductToCart(this.productAddedTocart);

      }
      else {
        console.log("Item already on cart");
      }
      console.log(this.cartItemCount);
      this.cartItemCount = this.productAddedTocart.length;
      this.sharedService.updateCartCount(this.cartItemCount);
    }
  }

}
