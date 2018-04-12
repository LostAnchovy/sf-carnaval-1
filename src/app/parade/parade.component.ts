import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-parade',
  templateUrl: './parade.component.html',
  styleUrls: ['./parade.component.scss']
})
export class ParadeComponent implements OnInit {
  // Our map! :)
  private map: mapboxgl.Map;

  loading = true;

  // Component attributes
  // Map theme
  @Input() style = 'mapbox://styles/anilad/cjftyar1a02qm2ro5mqtigv4v';

  // Ask for location and fly to it
  @Input() geolocation = false;

  @Input() center: [Number, Number] = [-122.412660, 37.758790];

  @Input() sw: [Number, Number] = [-122.427514, 37.745367];

  @Input() ne: [Number, Number] = [-122.400200, 37.773207];

  constructor() {
    // Setup mapbox public key
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    // Ask for location.
    if (this.geolocation && navigator.geolocation) {
      // Get coordinates
      navigator.geolocation.getCurrentPosition(position => {
        // 🛩
        this.map.flyTo({
          center: [position.coords.longitude, position.coords.latitude]
        });
      });
    }
    this.buildMap();
  }

  private buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: this.center,
      maxBounds: [this.sw, this.ne]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Toggle loading symbol
    this.map.on('load', (event) => {
      this.loading = false;
      
      // Add line for parade
      this.map.addLayer({
        "id": "parade",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.411904, 37.752642],
                [-122.418434, 37.752236],
                [-122.419868, 37.766687],
                [-122.413295, 37.767095]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(0, 148, 50, 0.5)",
          "line-width": 8
        }
      }); // end of parade line

      // Add line for Festival
      this.map.addLayer({
        "id": "festival",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.411904, 37.752642],
                [-122.413192, 37.765445]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(6, 82, 221, 0.5)",
          "line-width": 8
        }
      }); // end of festival line layer

      // Add line for Destaging Area
      this.map.addLayer({
        "id": "destage",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.413295, 37.767095],
                [-122.413192, 37.765445],
                [-122.412564, 37.766856]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(255, 196, 18, 0.5)",
          "line-width": 8
        }
      }); // end of destaging area layer

      // Add line for Staging Area
      this.map.addLayer({
        "id": "stage1",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.410384, 37.764326],
                [-122.408748, 37.748486],  
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(237, 76, 103, 0.5)",
          "line-width": 8
        }
      });
      this.map.addLayer({
        "id": "stage2",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.408216, 37.752867], 
                [-122.411904, 37.752642]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(237, 76, 103, 0.5)",
          "line-width": 8
        }

      });// end of staging area layer
    });
  }
}