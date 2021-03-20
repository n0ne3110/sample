import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: [ './shops.component.css' ]
})
export class ShopsComponent implements OnInit {

  constructor() { }
  shops: any[]

  ngOnInit(): void {
    this.shops = [
      { name: 'Star Nail', price: 1, address: 'Short Pump, VA 23235', phone_number: '804 111-1111', image: 'assets/shop1.jpg' },
      { name: 'Poliah Nail Bar', price: 1, address: 'Short Pump, VA 23235', phone_number: '804 111-1111', image: 'assets/shop2.jpg' },
      { name: 'Stuart Nails', price: 1, address: 'Short Pump, VA 23235', phone_number: '804 111-1111', image: 'assets/shop3.jpg' },
      { name: 'Malibu Nails & Spa', price: 1, address: 'Short Pump, VA 23235', phone_number: '804 111-1111', image: 'assets/shop4.jpg' },
      { name: 'Nail Art', price: 1, address: 'Short Pump, VA 23235', phone_number: '804 111-1111', image: 'assets/shop5.jpg' } ]
  }
}
