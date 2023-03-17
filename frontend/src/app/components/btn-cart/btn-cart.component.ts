import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-btn-cart',
  templateUrl: './btn-cart.component.html',
  styleUrls: ['./btn-cart.component.css']
})
export class BtnCartComponent implements OnInit {

  cantProducts:number=0

  constructor(private cartService:CartService) {
    this.cantProducts=this.cartService.countProducts()    
  }

  ngOnInit(): void {
    
  }

}
