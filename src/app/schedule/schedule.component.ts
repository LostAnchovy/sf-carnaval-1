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
  day2_s17 = [];
  day2_s20 = [];
  day2_s21 = [];
  day2_s22 = [];
  day2_dj18 = []; 
  day2_dj19 = [];
  day2_dj22 = [];
  testEvent= {
      "id": "1",
      "type": "events",
      "attributes": {
        "title": "Event #2",
        "description": "This is event 2",
        "location": "17th Street Stage",
        "time": "2000-01-01T12:00:00.000Z",
        "end_time": "2000-01-01T13:01:00.000Z",
        "image_thumbnail": null,
        "image_original": null,
        "event_date": "Saturday",
        "date": "2018-04-25T21:10:19.293Z"
      }
  };
  testEvent_sunday= {
      "id": "1",
      "type": "events",
      "attributes": {
        "title": "Event #2",
        "description": "This is event 2",
        "location": "17th Street Stage",
        "time": "2000-01-01T12:00:00.000Z",
        "end_time": "2000-01-01T13:01:00.000Z",
        "image_thumbnail": null,
        "image_original": null,
        "event_date": "Sunday",
        "date": "2018-04-25T21:10:19.293Z"
      }
  };

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {

    let obs = this._api.getEvents()
    obs.subscribe(data => {
      // Pulls Events from DB
      this.events = data['data'];
      this.sortEvents();
      this.day1_s17.push(this.testEvent);
      this.day2_s17.push(this.testEvent_sunday);
    })
    this.day1_s17.push(this.testEvent);
      this.day2_s17.push(this.testEvent_sunday);
    

  }

  sortEvents(){
    this.day1_s17 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "17th Street Stage");
    this.day1_s20 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "20th Street Stage");
    this.day1_s21 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "21st Street Stage");
    this.day1_s22 = this.events.filter((event) => event.attributes.event_date == "Saturday" && event.attributes.location == "22nd Street Stage");
    this.day2_s17 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "17th Street Stage");
    this.day2_s20 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "20th Street Stage");
    this.day2_s21 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "21st Street Stage");
    this.day2_s22 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "22nd Street Stage");
    this.day2_dj18 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "18th Street DJ Booth");
    this.day2_dj19 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "19th Street DJ Booth");
    this.day2_dj22 = this.events.filter((event) => event.attributes.event_date == "Sunday" && event.attributes.location == "22nd Street DJ Booth");    
  }

}


