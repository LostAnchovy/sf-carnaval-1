import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs;
  gen_faq = [];
  photo_faq = [];
  fest_faq = [];
  parade_faq =[];
  vol_faq = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    let obs = this._api.getFaqs()
    obs.subscribe(data => {
      // Pulls FAQ's from DB
      this.faqs = data['data'];
      this.splitFAQs();
    })

  }

  // Sorts FAQ's for better viewing
  splitFAQs(){
    for(var i=0; i<this.faqs.length; i++){
      if(this.faqs[i].attributes.category == "General"){
        this.gen_faq.push(this.faqs[i]);
      } else if(this.faqs[i].attributes.category == "Photography"){
        this.photo_faq.push(this.faqs[i]);
      } else if(this.faqs[i].attributes.category == "Festival"){
        this.fest_faq.push(this.faqs[i]);
      } else if(this.faqs[i].attributes.category == "Parade"){
        this.parade_faq.push(this.faqs[i]);
      } else if(this.faqs[i].attributes.category == "Volunteer/Participant"){
        this.vol_faq.push(this.faqs[i]);
      }
    }
  }

}
