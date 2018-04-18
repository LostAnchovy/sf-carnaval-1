import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  events;
  events_26th = [];
  events_27th = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {

    let obs = this._api.getEvents()
    obs.subscribe(data => {
      // Pulls Events from DB
      this.events = data['data'];
      this.sortByDate();
        
    })
  }

  sortByDate() {
    for(var i = 0; i < this.events.length; i++){
      if(this.events[i].attributes.time < "2018-05-27T00:00:00+00:00"){
        this.events_26th.push(this.events[i]);
      } else {
        this.events_27th.push(this.events[i]);
      }
    }
  }

  sortByLocation() {
    for(var i = 0; i<this.events.length; i++){
      if(this.events[i].attributes.location){
        
      }
    }
  }

}


