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

  // @Input() center: [Number, Number] = [-122.414469, 37.756034];
  @Input() center: [Number, Number] = [-122.418915, 37.757044];

  // @Input() sw: [Number, Number] = [-122.428861, 37.743562];
  @Input() sw: [Number, Number] = [-122.429118, 37.745576];

  // @Input() ne: [Number, Number] = [-122.400200, 37.773207];
  @Input() ne: [Number, Number] = [-122.403247, 37.773037];

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
    var map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 4,
      center: this.center,
      maxBounds: [this.sw, this.ne]
    });

    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());

    // Toggle loading symbol v. map
    map.on('load', (event) => {
      this.loading = false;
      // Add line for parade
      map.addLayer({
        "id": "Parade",
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
      map.addLayer({
        "id": "Festival",
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
      map.addLayer({
        "id": "Destaging",
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
      map.addLayer({ //staging area layer
        "id": "Staging",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [-122.410384, 37.764326],
                  [-122.408748, 37.748486],
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [-122.408216, 37.752867],
                  [-122.411904, 37.752642]
                ]
              }
            }] //end of features
          },
        }, //end of source
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(237, 76, 103, 0.5)",
          "line-width": 8
        }
      }); //end of staging area layer
      // Add line for Judges & Grandstands Area
      map.addLayer({
        "id": "GrandStand",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.418551, 37.757018],
                [-122.418404, 37.755525]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(134, 20, 255, 0.5)",
          "line-width": 8
        }
      }); // end of Judges & Grandstands area layer
    });

    //togglable legend buttons
    var toggleableLayerIds = ['Staging', 'Destaging', 'Parade', 'Festival', 'GrandStand'];
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];

      var link = document.createElement('button');

      link.textContent = id;

      switch (link.textContent) {
        case "Staging": {
          link.className = 'btn btn-sm btn-block btn-staging font-weight-bold p-1 m-1';
          break;
        }
        case "Festival": {
          link.className = 'btn btn-sm btn-block btn-festival font-weight-bold p-1 m-1';
          break;
        }
        case "Parade": {
          link.className = 'btn btn-sm btn-block btn-parade font-weight-bold p-1 m-1';
          break;
        }
        case "Destaging": {
          link.className = 'btn btn-sm btn-block btn-destage font-weight-bold p-1 m-1';
          break;
        }
        case "GrandStand": {
          link.className = 'btn btn-sm btn-block btn-grand font-weight-bold p-1 m-1';
          break;
        }
        default: {
          link.className = 'btn btn-sm btn-block btn-primary font-weight-bold p-1 m-1';
          break;
        }
      }

      link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        if (visibility === 'visible') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');
          this.className = 'btn btn-sm btn-block btn-light p-1 m-1';
        } else {
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          switch (clickedLayer) {
            case "Staging": {
              this.className = 'btn btn-sm btn-block btn-staging font-weight-bold p-1 m-1'
              break;
            }
            case "Festival": {
              this.className = 'btn btn-sm btn-block btn-festival font-weight-bold p-1 m-1';
              break;
            }
            case "Parade": {
              this.className = 'btn btn-sm btn-block btn-parade font-weight-bold p-1 m-1';
              break;
            }
            case "Destaging": {
              this.className = 'btn btn-sm btn-block btn-destage font-weight-bold p-1 m-1';
              break;
            }
            case "GrandStand": {
              this.className = 'btn btn-sm btn-block btn-grand font-weight-bold p-1 m-1';
              break;
            }
            default: {
              this.className = 'btn btn-sm btn-block btn-primary font-weight-bold p-1 m-1'
              break;
            }
          }
        }
      };
      var layers = document.getElementById('menu');
      layers.appendChild(link);

    }
  }
}