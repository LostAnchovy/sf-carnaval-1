import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-vendor',
  templateUrl: './food-vendor.component.html',
  styleUrls: ['./food-vendor.component.scss']
})
export class FoodVendorComponent implements OnInit {
  @Input() vendor;
  
  constructor() { }

  ngOnInit() {
  }

}
