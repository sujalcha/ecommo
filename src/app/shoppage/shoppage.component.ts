import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';
import { ProductPost } from '../Models/ProductPost/ProductPost';
import { IAlert } from '../Models/ialert.model';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {

  productDetails: Productdetails;
  id: number;
  public alerts: Array<IAlert> = [];
  productAddedTocart: Productdetails[];
  productAddedTofavourites: Productdetails[];
  cartItemCount: number = 0;
  favouriteItemCount: number = 0;

  @Input() isfavourite: boolean;
  posts: any;
  product: Productdetails

  productpost: ProductPost;

  products: ProductPost[] = []
  boomlea = [];

  constructor(private router: ActivatedRoute,
    private productService: ProductService,
    private sharedService: SharedServiceService) { }



  ngOnInit() {


    this.getproducts();


  }

  getproducts() {
    this.productService.getproduct()
      .subscribe(response => {
        this.posts = response;
        for (let i = 0; i < this.posts.length; ++i) {
          this.productpost = new ProductPost(this.posts[i], false);
          this.products.push(this.productpost);

        }

        this.productAddedTofavourites = this.productService.getProductFromFavourites();
        this.getMatch(this.products, this.productAddedTofavourites)

      })

  }

  getMatch(cartitems: ProductPost[], favitems: Productdetails[]) {
    let FinalArray = [];

    if (cartitems == null) {
      cartitems = []
    }
    if (favitems == null) {
      favitems = []
    }
    for (let i = 0; i < favitems.length; ++i) {
      let temp = favitems[i];
      let found = false;

      for (let j = 0; j < cartitems.length; ++j) {
        if (cartitems[j].actualproduct.productid === temp.productid) {
          found = true;
          break;
        }
      }

      if (found) {
        FinalArray.push(temp);
      }
    }

    for (let i = 0; i < cartitems.length; ++i) {
      let temp = cartitems[i].actualproduct;
      let found = false;

      for (let j = 0; j < FinalArray.length; ++j) {
        if (FinalArray[j].productid === temp.productid) {
          found = true;
          break;
        }
      }

      if (found) {
        this.products[i].isfavourite = false;
      }
      if (!found) {
        this.boomlea.push(true);
        this.products[i].isfavourite = true;
      }
    }
  }


  updateFavourite(productpost: ProductPost[], q: number) {


    console.log(productpost[q].isfavourite);
    console.log("clicked");


    this.productAddedTofavourites = this.productService.getProductFromFavourites();

    if (productpost[q].isfavourite === true) {
      productpost[q].isfavourite = false
      console.log(productpost[q].isfavourite);
      if (this.productAddedTofavourites == null) {
        this.productAddedTofavourites = [];
        this.productAddedTofavourites.push(productpost[q].actualproduct);
        this.productService.addProductToFavourites(this.productAddedTofavourites);
        console.log("Item added to empty favaourites list")

        this.favouriteItemCount = this.productAddedTofavourites.length;
        this.sharedService.updateFavouriteCount(this.favouriteItemCount);
        console.log(this.favouriteItemCount);

      }
      else {
        let tempProduct = this.productAddedTofavourites.find(p => p.productid == productpost[q].actualproduct.productid);
        if (tempProduct == null) {
          this.productAddedTofavourites.push(productpost[q].actualproduct);
          this.productService.addProductToFavourites(this.productAddedTofavourites);
          console.log("Item added to favaourites")

          this.favouriteItemCount = this.productAddedTofavourites.length;
          this.sharedService.updateFavouriteCount(this.favouriteItemCount);
          console.log(this.favouriteItemCount);

        }
        else {
        }
      }

    }

    else if (productpost[q].isfavourite === false) {
      productpost[q].isfavourite = true
      console.log(productpost[q].isfavourite);

      if (this.productAddedTofavourites == null) {
        console.log("The item is null or is deleted already");

      }

      else {

        let tempProductindex = this.productAddedTofavourites.findIndex(p => p.productid == productpost[q].actualproduct.productid);
        console.log(tempProductindex);
        if (tempProductindex == null) {
          console.log("The item is does not exist in localstorage");
        }
        else {
          console.log(this.productAddedTofavourites);
          this.productAddedTofavourites.splice(tempProductindex, 1);
          this.productService.removeProductFromFavourites(this.productAddedTofavourites);
          console.log("The item is deleted now");

          this.favouriteItemCount = this.productAddedTofavourites.length;
          this.sharedService.updateFavouriteCount(this.favouriteItemCount);
          console.log(this.favouriteItemCount);

        }
      }
    }
  }
}
