import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetails } from '../Models/ProductDetails/productdetails.model';

@Component({
  selector: 'app-insertproductpage',
  templateUrl: './insertproductpage.component.html',
  styleUrls: ['./insertproductpage.component.css']
})
export class InsertproductpageComponent implements OnInit {

 productdetails : Productdetails = new Productdetails();
 // =  new Productdetails("dishoes","dammi","shoeews",52,45,"2",2);

 //posts : any;
 constructor(private productService : ProductService) { }

 ngOnInit() {
  // this.productService.getpost()
  //  .subscribe(response =>{
  //   console.log(response);
  //   this.posts = response;
  // })
}

  onSavePost(input: HTMLInputElement){
    // let post:any = {title: input.value};
    // input.value="";
    // this.productService.savepost(post)
    // .subscribe( response =>{
    //   console.log(response);
    //   post.id = response;
    //   this.posts.splice(0,0,post);
    //})
  }

   onSaveProduct(
   // Brand,Name,Description,Availability,MarkedPrice,SellingPrice,Category
     ) {

     // let productdetails : Productdetails =  new Productdetails("Adddi","dammi","shoeews",52,45,"2",2);

    //  let productdetdails: Productdetails = {
    //    Brand : Brand.value, 
    //    Name:Name.value,
    //    Description:Description.value, 
    //    Availability : Availability.value,
    //    MarkedPrice:MarkedPrice.value,
    //    SellingPrice:SellingPrice.value,
    //    Category:Category.value}

    console.log(this.productdetails);
    console.log("On Save clicked");
    this.productService.saveProduct(this.productdetails)
    // .subscribe(
    //   //  response =>{
    //   // console.log(response);
    // //  post.id = response;
    //  // this.posts.splice(0,0,post);;
    // //}
    // )
 
   }



}
