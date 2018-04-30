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
    this.b1718 = this.foods.filter((foods)=>foods.attributes.location == "Booth: 17th to 18th");
    this.b1920 = this.foods.filter((foods)=>foods.attributes.location == "Booth: 19th to 20th");
    this.b2021 = this.foods.filter((foods)=>foods.attributes.location == "Booth: 20th to 21st");
    this.b2122 = this.foods.filter((foods)=>foods.attributes.location == "Booth: 21st to 22nd");
    this.t1718 = this.foods.filter((foods)=>foods.attributes.location == "Truck: 17th to 18th");
    this.t1819 = this.foods.filter((foods)=>foods.attributes.location == "Truck: 18th to 19th");
    this.t21 = this.foods.filter((foods)=>foods.attributes.location == "Truck: 21st");
    this.t23 = this.foods.filter((foods)=>foods.attributes.location == "Truck: 23rd");
  }

}