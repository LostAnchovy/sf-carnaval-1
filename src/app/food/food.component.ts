import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foods;
  b1718 = [];
  b1920 = [];
  b2021 = [];
  b2122 = [];
  t1718 = [];
  t1819 = [];
  t21 = [];
  t23 = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getFoods().subscribe(response => {
      this.foods = response['data'];
      this.sortVendors();
    })
  }

  sortVendors(){
    for(var i = 0; i < this.foods.length; i++){
      if(this.foods[i].attributes.location == "Booth: 17th to 18th"){
        this.b1718.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Booth: 19th to 20th"){
        this.b1920.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Booth: 20th to 21st"){
        this.b2021.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Booth: 21st to 22nd"){
        this.b2122.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Truck: 17th to 18th"){
        this.t1718.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Truck: 18th to 19th"){
        this.t1819.push(this.foods[i].attributes);
      } else if (this.foods[i].attributes.location == "Truck: 21st"){
        this.t21.push(this.foods[i].attributes);
      } else {
        this.t23.push(this.foods[i].attributes);
      }
    }
  }

}