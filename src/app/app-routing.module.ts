import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailspageComponent } from './blogdetailspage/blogdetailspage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ProductdetailspageComponent } from './productdetailspage/productdetailspage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ShoppingcartpageComponent } from './shoppingcartpage/shoppingcartpage.component';
import { InsertproductpageComponent } from './insertproductpage/insertproductpage.component';
import { FavouritepageComponent } from './favouritepage/favouritepage.component';

const routes: Routes = [
  { path: 'HomePage', component: HomepageComponent },
  { path: 'ContactPage', component: ContactpageComponent },
  { path: 'TrackingPage', component: TrackingpageComponent },
  { path: 'BlogPage', component: BlogComponent },
  { path: 'Blogdetailspage', component: BlogdetailspageComponent },
  { path: 'ContactPage', component: ContactpageComponent },
  { path: 'ShopPage/Productdetailpage/:id', component: ProductdetailspageComponent },
  { path: 'Checkoutpage', component: CheckoutpageComponent },
  { path: 'Shopcartpage', component: ShoppingcartpageComponent },
  { path: 'Insertproduct', component: InsertproductpageComponent },
  { path: 'Favouritepage', component: FavouritepageComponent },
  { path: 'ShopPage', component: ShoppageComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
