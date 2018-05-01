import {
  Component,
  OnInit,
  Input
} from '@angular/core';
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
    let [date,timeS,timeE]=this.formatDateTime(detail);//helper function

    let calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE` +
      `&text=${escape(detail.title)}` +
      `&details=${escape(detail.description)}` +
      `&location=${escape(detail.location)}` +
      `&dates=${date}${timeS}Z%2F${date}${timeE}Z&ctz=America/Los_Angeles`;
    console.log(calendarLink);
    return calendarLink;
  }
  formatDateTime(detail){
    let date; let time;
    if (detail.event_date === "Saturday") {
      date = "20180526T";
    } else if (detail.event_date === "Sunday") {
      date = "20180527T";
    }
    return [date,"190600","202000"];//["20180527T","183500","191200"]
  }
}

