import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [ './services.component.css' ]
})
export class ServicesComponent implements OnInit {
  dialogTitle: any
  display: boolean
  displayCart: boolean
  selectedServices: any[]
  subServices: any[];
  selected: any
  facialTypes: { label: string; value: string; }[];
  facialScrubs: { label: string; value: string; }[];
  displayFacialDialog: boolean
  displayWaxingDialog: boolean
  waxingFaceTypes: { label: string; value: string; }[];
  waxingUpperBodyTypes: { label: string; value: string; }[];
  waxingLowerBodyTypes: { label: string; value: string; }[];
  constructor() { }

  ngOnInit(): void {
    this.selectedServices = []
    this.facialTypes = [
      { label: 'Regular', value: 'Regular' },
      { label: 'Deluxe', value: 'Deluxe' },
    ];
    this.facialScrubs = [
      { label: 'Strawberry', value: 'Regular' },
      { label: 'Kiwi', value: 'Deluxe' },
      { label: 'Lemon', value: 'Deluxe' },
      { label: 'Matcha', value: 'Deluxe' },
    ];
    this.waxingFaceTypes = [
      { label: 'Eyebrow', value: 'Eyebrow' },
      { label: 'Upper Lip', value: 'Upper Lip' },
      { label: 'Chin', value: 'Chin' },
      { label: 'Full Face', value: 'Full Face' },
    ];
    this.waxingUpperBodyTypes = [
      { label: 'Underarm', value: 'Underarm' },
      { label: 'Chest', value: 'Chest' },
      { label: 'Stomach', value: 'Stomach' },
      { label: 'Half Back', value: 'Half Back' },
      { label: 'Full Back', value: 'Full Back' },
      { label: 'Half Arms', value: 'Half Arms' },
      { label: 'Full Arms', value: 'Full Arms' },
    ];
    this.waxingLowerBodyTypes = [
      { label: 'Inner Thighs', value: 'Inner Thighs' },
      { label: 'Half Legs', value: 'Half Legs' },
      { label: 'Full Legs', value: 'Full Legs' },
      { label: 'Classic Bikini', value: 'Classic Bikini' },
      { label: 'French Bikini', value: 'French Bikini' },
      { label: 'Brazillian', value: 'Brazillian' },
      { label: 'The Cheeks', value: 'The Cheeks' },
    ];
  }

  addService(service) {
    this.selectedServices.push(service)
    this.displayWaxingDialog = false
    this.displayFacialDialog = false
    this.displayCart = true
  }

  onContinueClicked() {
    this.displayCart = false
    this.displayFacialDialog = false
    this.displayWaxingDialog = false
  }

}
