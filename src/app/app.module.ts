import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { OfferedservicesComponent } from './offeredservices/offeredservices.component';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { ProductadvertComponent } from './productadvert/productadvert.component';
import { InspiredproductComponent } from './inspiredproduct/inspiredproduct.component';
import { LatestblogComponent } from './latestblog/latestblog.component';
import { FooterComponent } from './footer/footer.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HeadericonsComponent } from './headericons/headericons.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { TrackingComponent } from './tracking/tracking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { BlogComponent } from './blog/blog.component';

import { TagcloudsComponent } from './tagclouds/tagclouds.component';
import { RecentpostComponent } from './recentpost/recentpost.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CategoryComponent } from './category/category.component';
import { InstagramfeedsComponent } from './instagramfeeds/instagramfeeds.component';
import { SearchblogComponent } from './searchblog/searchblog.component';
import { BlogdetailspageComponent } from './blogdetailspage/blogdetailspage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ProductdetailspageComponent } from './productdetailspage/productdetailspage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { ShoppingcartpageComponent } from './shoppingcartpage/shoppingcartpage.component';
import { InsertproductpageComponent } from './insertproductpage/insertproductpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { FavouritepageComponent } from './favouritepage/favouritepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbannerComponent,
    OfferedservicesComponent,
    FeaturedproductsComponent,
    NewproductsComponent,
    ProductadvertComponent,
    InspiredproductComponent,
    LatestblogComponent,
    FooterComponent,
    TopmenuComponent,
    HeadericonsComponent,
    NavigationComponent,
    BreadcrumComponent,
    TrackingComponent,
    HomepageComponent,
    TrackingpageComponent,
    BlogComponent,
    TagcloudsComponent,
    RecentpostComponent,
    NewsletterComponent,
    CategoryComponent,
    InstagramfeedsComponent,
    SearchblogComponent,
    BlogdetailspageComponent,
    ContactpageComponent,
    ShoppageComponent,
    ProductdetailspageComponent,
    CheckoutpageComponent,
    ShoppingcartpageComponent,
    InsertproductpageComponent,
    FavouritepageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
