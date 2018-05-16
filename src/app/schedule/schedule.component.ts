import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  events;
  day1_s17 = [];
  day1_s20 = [];
  day1_s21 = [];
  day1_s22 = [];
  day1_s23 = [];
  day2_s17 = [];
  day2_s20 = [];
  day2_s21 = [];
  day2_s22 = [];
  day2_s23 = [];
  day2_dj18 = []; 
  day2_dj19 = [];
  day2_dj22 = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {

    let obs = this._api.getEvents()
    obs.subscribe(data => {
      // Pulls Events from DB
      this.events = data['data'];
      this.sortEvents();
    })
    

  }

  sortEvents(){
    this.day1_s17 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "17th Street Stage");
    this.day1_s20 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "20th Street Stage");
    this.day1_s21 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "21st Street Stage");
    this.day1_s22 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "Main Stage: 22nd Street Stage");
    this.day1_s23 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "23rd Street Stage");
    this.day2_s17 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "17th Street Stage");
    this.day2_s20 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "20th Street Stage");
    this.day2_s21 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "21st Street Stage");
    this.day2_s22 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "Main Stage: 22nd Street Stage");
    this.day2_s23 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "23rd Street Stage");
    this.day2_dj18 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "18th Street DJ Booth");
    this.day2_dj19 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "19th Street DJ Booth");
    this.day2_dj22 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "22nd Street DJ Booth");    
  }

}


