import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount:number=0;
  favItemCount:number=0;
  constructor(private sharedService:SharedServiceService) { }

  ngOnInit() {
    console.log(this.cartItemCount);
    this.sharedService.loadcart().subscribe( msg => this.cartItemCount = msg);
    console.log(this.cartItemCount);

    console.log(this.favItemCount);
    this.sharedService.loadfav().subscribe( favItemCountmsg => this.favItemCount = favItemCountmsg);
    console.log(this.favItemCount);
  }

}
