import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sponsor-each',
  templateUrl: './sponsor-each.component.html',
  styleUrls: ['./sponsor-each.component.scss']
})
export class SponsorEachComponent implements OnInit {
  @Input() sponsor;

  constructor() { }

  ngOnInit() {
  }

}
