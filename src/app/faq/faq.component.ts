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
    this.gen_faq = this.faqs.filter((faq)=>faq.attributes.category == "General");
    this.photo_faq = this.faqs.filter((faq)=>faq.attributes.category == "Photography");
    this.fest_faq = this.faqs.filter((faq)=>faq.attributes.category == "Festival");
    this.parade_faq = this.faqs.filter((faq)=>faq.attributes.category == "Parade");
    this.vol_faq = this.faqs.filter((faq)=>faq.attributes.category == "Volunteer/Participant");
  }

}
