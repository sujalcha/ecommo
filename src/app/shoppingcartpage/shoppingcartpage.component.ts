import { Component, OnInit } from '@angular/core';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';
import { ProductService } from '../services/product.service';
import { ProductPost } from '../Models/ProductPost/ProductPost';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-shoppingcartpage',
  templateUrl: './shoppingcartpage.component.html',
  styleUrls: ['./shoppingcartpage.component.css']
})
export class ShoppingcartpageComponent implements OnInit {

  productAddedTocart: Productdetails[];

  constructor(private productService: ProductService, private sharedService: SharedServiceService) { }

  total:number=0;
  subtotal= [];
  qty: number = 1;
  num = [];
  cartItemCount: number = 0;
  ngOnInit() {
    
    this.productAddedTocart = this.productService.getProductFromCart();
 
    for (let _i = 0; _i < this.productAddedTocart.length; _i++) {
      let tempnum = 1;
      this.num.push(tempnum);
    }
  

    this.calculatesubtotal();

  }

  calculatesubtotal()
  {
    for (let i in this.productAddedTocart) {
      // console.log(this.num[i]);
      // console.log(this.productAddedTocart[i]);
      // console.log(this.productAddedTocart[i].productsellingprice);
      this.subtotal[i]=this.productAddedTocart[i].productsellingprice*this.num[i];
      // console.log("subtotal "+this.subtotal[i]);
      this.total=this.total+this.subtotal[i]
      console.log(this.subtotal[i]);
      console.log(this.total);
   }

  }


  AddQuantity(q: number) {
    this.total=0;
    this.num[q] = this.num[q] + 1;
    this.calculatesubtotal();
   
  }

  RemoveQuantity(q: number) {
    if (this.num[q] > 0)
    this.total=0;
      this.num[q] = this.num[q] - 1;
      this.calculatesubtotal();
  }

  onAddQuantity(product: Productdetails) {
    //Get Product
    this.productAddedTocart = this.productService.getProductFromCart();
    // this.productAddedTocart.find(p => p.productid == product.productid).Quantity = product.Quantity + 1;

    // this.productService.removeAllProductFromCart();
    // this.productService.addProductToCart(this.productAddedTocart);
    // this.calculteAllTotal(this.productAddedTocart);
    // this.deliveryForm.controls['Amount'].setValue(this.allTotal);

  }
  onRemoveQuantity(product: Productdetails) {
    this.productAddedTocart = this.productService.getProductFromCart();
    // this.productAddedTocart.find(p => p.Id == product.productid).Quantity = product.Quantity - 1;
    // this.productService.removeAllProductFromCart();
    // this.productService.addProductToCart(this.productAddedTocart);
    // this.calculteAllTotal(this.productAddedTocart);
    // this.deliveryForm.controls['Amount'].setValue(this.allTotal);

  }

  Removeproduct(product: Productdetails, index: number) {


    console.log(product);
    console.log("clicked");


    this.productAddedTocart = this.productService.getProductFromCart();

    if (this.productAddedTocart == null) {
      console.log("The item is null or is deleted already");

    }

    else {

      let tempProductindex = this.productAddedTocart.findIndex(p => p.productid == product.productid);
      console.log(tempProductindex);
      if (tempProductindex == null) {
        console.log("The item is does not exist in localstorage");
      }
      else {
        console.log(this.productAddedTocart);
        this.productAddedTocart.splice(tempProductindex, 1);
        this.productService.removeProductFromCart(this.productAddedTocart);
        console.log("The item is deleted now");

        this.cartItemCount = this.productAddedTocart.length;
        this.sharedService.updateCartCount(this.cartItemCount);
        console.log(this.cartItemCount);
        this.total=0;
        this.calculatesubtotal();
      }
    }

  }

}
