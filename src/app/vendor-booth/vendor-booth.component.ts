import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-booth',
  templateUrl: './vendor-booth.component.html',
  styleUrls: ['./vendor-booth.component.scss']
})
export class VendorBoothComponent implements OnInit {
  @Input() vendor;
  
  constructor() { }

  ngOnInit() {
  }

}
