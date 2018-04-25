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

  }

  sortByLocation() {

  }

}


