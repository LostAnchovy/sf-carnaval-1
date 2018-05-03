import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import * as moment from 'moment';
declare function escape(s: string): string; //important! encodeURI doesn't encode # which google calendar expects lol

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.scss']
})
export class ScheduleEventComponent implements OnInit {
  @Input() event;
  eventlink ? : string;

  constructor() {}

  ngOnInit() {
    this.eventlink = this.googleCalendarFromEvent(this.event);
  }
  googleCalendarFromEvent(calEvent) {
    let detail = calEvent.attributes; //was this supposed to be event.attributes? The backend wrapped it inside of data[0]    
    let [date, timeS, timeE] = this.formatDateTime(detail); //helper function

    let calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE` +
      `&text=${escape(detail.title)}` +
      `&details=${escape(detail.description)}` +
      `&location=${escape(detail.location)}` +
      `&dates=${date}${timeS}Z%2F${date}${timeE}Z&ctz=America/Los_Angeles`;
    console.log(calendarLink);
    return calendarLink;
  }
  formatDateTime(detail) {
    let date = detail.event_date;
    let time = detail.time.slice(11); //grab time 
    let endTime = detail.end_time.slice(11);
    if (date === "Saturday") {
      date = "20180526T";
    } else if (date === "Sunday") {
      date = "20180527T";
    }
    time = moment(time, "HH:mm:ss").add(7, 'hours').format("HHmmss");
    endTime = moment(endTime, "HH:mm:ss").add(7, 'hours').format("HHmmss");
    console.log(time);
    return [date, time, endTime]; //test event times: should display 12pm~1:01pm, which is the same as the backend data entry; moment added 7 hours to convert from pacific time to GWT time which google calendar API expects
    //["20180527T","183500","191200"]
  }
}
