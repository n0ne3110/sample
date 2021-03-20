import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  selectedTechnician: any;

  constructor() {}
  technicians: any[];
  display: boolean;
  dialogTable: any;
  displayBooking: boolean;
  availability: any;
  date: Date = new Date();
  startTime: any;
  endTime: any;
  ngOnInit(): void {
    this.selectedTechnician = {};
    this.availability = [{ label: new Date(), value: new Date() }];
    this.technicians = [
      {
        name: 'Amy',
        price: 1,
        address: 'Short Pump, VA 23235',
        phone_number: '804 111-1111',
        image: 'assets/shop1.jpg',
      },
      {
        name: 'Mary',
        price: 1,
        address: 'Short Pump, VA 23235',
        phone_number: '804 111-1111',
        image: 'assets/shop2.jpg',
      },
      {
        name: 'Sara',
        price: 1,
        address: 'Short Pump, VA 23235',
        phone_number: '804 111-1111',
        image: 'assets/shop3.jpg',
      },
    ];
  }

  onTechnicianSelected(data) {
    this.displayBooking = true;
    this.selectedTechnician = _.cloneDeep(data);
  }
}
