import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.scss']
})
export class ScheduleEventComponent implements OnInit {
  @Input() event;
  eventlink;

  constructor() { }

  ngOnInit() {
    
  }

}
