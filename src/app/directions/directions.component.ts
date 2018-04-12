import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  publicTransitDirections = [{
      header: "Via BART: 24th St",
      text: "Head north on Mission St toward 24th St. Turn right at 24th st, and main entrance is on your left at Harrison st.",
      img: "../assets/images/BART_route.png",
    },
    {
      header: "Via MUNI: 16th and Harrison",
      text: "Busses stop at both the North(Route 22, 33 & 55) and South(Route 48) end of the Venue.",
      img: "../assets/images/MUNI.png",
    },
  ];
  drivingDirections = [{
      header: "From South via 101",
      text: "From 101N take the Cesar Chavez St/ Portero St exit. Follow signs to Cesar Chavez St and Turn right at Harrison St.",
      img: "../assets/images/South_Drive.png",
    },
    {
      header: "From North via 101",
      text: "From 101S take the Harrison St Exit and continue for about 0.3 miles.",
      img: "../assets/images/North101_Drive.png",
    },
    {
      header: "From North via 80",
      text: "From 80S take the Civic Center Exit and merge onto Harrison St. Follow Harrison St for about 0.7 miles.",
      img: "../assets/images/North80_Drive.png",
    }
  ];
  parkingDirections = [{
    header: "See on Google Maps",
    text: "The Mission is one of the most transit rich neighborhoods in San Francisco. We strongly encourage biking, walking, or taking public transportation to get to Carnaval San Francisco when possible.",
    img: "../assets/images/parking.png",
    link:"https://www.google.com/search?biw=1318&bih=664&q=mission+district+public+parking+sf&npsic=0&rflfq=1&rlha=0&rllag=37758018,-122419218,173&tbm=lcl&ved=0ahUKEwiVxoWJmKvaAhUxtlkKHbjHCo8QtgMIKw&tbs=lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:3&rldoc=1#rlfi=hd:;si:;mv:!1m3!1d8526.412240095306!2d-122.41734878734133!3d37.760040007512565!3m2!1i898!2i519!4f13.1"
  },

];
  constructor() {}

  ngOnInit() {}


}
