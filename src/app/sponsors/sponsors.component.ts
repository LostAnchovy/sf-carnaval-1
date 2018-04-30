import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors;
  featured_sponsors = [];
  other_sponsors = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    let obs = this._api.getSponsors()
    obs.subscribe(data => {
      // Pulls Sponsors from DB
      this.sponsors = data['data'];
      this.sortSponsors();
        
    })
  }
  // Sorts Sponsors by tier
  sortSponsors(){
    this.featured_sponsors = this.sponsors.filter((sponsors)=>sponsors.attributes.featured == true );
    this.other_sponsors = this.sponsors.filter((sponsors)=>sponsors.attributes.featured == false);
  }


}
