import { Productdetails } from '../ProductDetails/productdetails.model';

export class ProductPost {

    actualproduct: Productdetails;
    isfavourite: boolean;

    constructor(
        Productdetails: Productdetails, isfavourite: boolean
    ){
        this.actualproduct=Productdetails;
        this.isfavourite=isfavourite;
    }

}
