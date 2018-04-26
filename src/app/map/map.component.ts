import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  environment
} from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // Our map! :)
  private map: mapboxgl.Map;

  loading = true;

  // Component attributes
  // Map theme
  @Input() style = 'mapbox://styles/anilad/cjfajrz4c71qn2tkasuwl9p7a';

  // Ask for location and fly to it
  @Input() geolocation = true;
  @Input() center: [Number, Number] = [-122.414741, 37.758917];
  @Input() sw: [Number, Number] = [-122.429118, 37.745576];
  @Input() ne: [Number, Number] = [-122.403247, 37.773037];

  constructor() {
    // Setup mapbox public key
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    var map = this.buildMap();
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

  }

  private buildMap() {
    var map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 14,
      center: this.center,
      // maxBounds: [this.sw, this.ne]
    });

    // disable map rotation using right click + drag
    map.dragRotate.disable();
    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();
    //user tracking
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());

    // Toggle loading symbol
    map.on('load', (event) => {
      this.loading = false;

      map.addLayer({ //exhibitors layer
        "id": "Exhibitors",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "geometry": {
                "coordinates": [
                  [// mariposa to 18th
                    [-122.4129496435111, 37.76275205286228],
                    [-122.41281605649516, 37.76276017659701],
                    [-122.41277898977586, 37.76233919188499],
                    [-122.41291294378654, 37.76233280892478],
                    [-122.4129496435111, 37.76275205286228]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 18th
                    [-122.41289010627348, 37.76211901304383],
                    [-122.41285825217243, 37.761740861773575],
                    [-122.41272517695681, 37.76174758197189],
                    [-122.41275677403551, 37.762126508061385],
                    [-122.41289010627348, 37.76211901304383]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 19th
                    [-122.41283430590283, 37.761456578902354],
                    [-122.41269617620674, 37.761463324978294],
                    [-122.41262727918907, 37.76073152509382],
                    [-122.41276518690135, 37.76072531697854],
                    [-122.41283430590283, 37.761456578902354]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 19th to 20th north
                    [-122.41270863993874, 37.76019387902903],
                    [-122.41257071226389, 37.760199974601576],
                    [-122.4125135725501, 37.75955063136287],
                    [-122.41264871580469, 37.75954409999984],
                    [-122.41270863993874, 37.76019387902903]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 19th to 20th south
                    [-122.41263567317719, 37.7594299519115],
                    [-122.41262127552739, 37.75927417928905],
                    [-122.41248537060882, 37.759280938431985],
                    [-122.41249951430532, 37.75943691922751],
                    [-122.41263567317719, 37.7594299519115]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [//19th to 20th southmost
                    [-122.41261158693233, 37.75918246285262],
                    [-122.41260552917787, 37.759112673390135],
                    [-122.41246914580242, 37.75912000337401],
                    [-122.41247566720536, 37.75918870024422],
                    [-122.41261158693233, 37.75918246285262]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 20th to 21st
                    [-122.41254457472333, 37.758415484069985],
                    [-122.4124080969636, 37.75842268267354],
                    [-122.41236593627718, 37.75800595988299],
                    [-122.41250213898303, 37.75799979697048],
                    [-122.41254457472333, 37.758415484069985]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }] //end of features
          },
        }, //end of source
        'layout': {
          'visibility': 'visible'
        },
        "paint": {
          "fill-color": "#F8E401",
          "fill-opacity": 0.8
        }
      }); //end of exhibits layer
      map.addLayer({ //sponsors layer
        "id": "Sponsors",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "geometry": {
                "coordinates": [
                  [// mariposa to 18th north sponsor
                    [-122.41295428861555, 37.76280536753585],
                    [-122.4129497371388, 37.762752778197935],
                    [-122.41281634373178, 37.762759697844686],
                    [-122.41282124532681, 37.76281228717765],
                    [-122.41295428861555, 37.76280536753585]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// mariposa to 18th south sponsor
                    [-122.41291246919256, 37.76233420699937],
                    [-122.41290798820523, 37.76227932486556],
                    [-122.41277436966938, 37.76228600793374],
                    [-122.41277921938729, 37.762340779592975],
                    [-122.41291246919256, 37.76233420699937]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 18th north sponsor
                    [-122.41289466720487, 37.762171841413945],
                    [-122.41289012310116, 37.76211864790915],
                    [-122.41275650103766, 37.76212643981812],
                    [-122.41276114319558, 37.76217903909517],
                    [-122.41289466720487, 37.762171841413945]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 18th south sponsor
                    [-122.41285863957505, 37.7617418135344],
                    [-122.41285394570917, 37.76168774215182],
                    [-122.4127205058087, 37.76169463359871],
                    [-122.41272519967457, 37.76174843992237],
                    [-122.41285863957505, 37.7617418135344]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 19th north sponsor
                    [-122.41283917917396, 37.76150958895782],
                    [-122.41270121305102, 37.76151648053464],
                    [-122.41269635154173, 37.76146280569182],
                    [-122.41283415003427, 37.76145564904044],
                    [-122.41283917917396, 37.76150958895782]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 18th to 19th south sponsor
                    [-122.41276530627947, 37.76072585336709],
                    [-122.41276027289953, 37.760671728511056],
                    [-122.41262234011776, 37.760678892098255],
                    [-122.41262737414154, 37.760732751622456],
                    [-122.41276530627947, 37.76072585336709]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 19th to 20th north sponsor
                    [-122.41271294851471, 37.76024632146357],
                    [-122.4125758399417, 37.76025267093789],
                    [-122.4125707025895, 37.760199133565706],
                    [-122.41270835910487, 37.76019235091408],
                    [-122.41271294851471, 37.76024632146357]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 19th to 20th south sponsor
                    [-122.41262119433293, 37.759274384670135],
                    [-122.41261165476452, 37.75918205918366],
                    [-122.41247606070364, 37.75918860931691],
                    [-122.41248529389742, 37.75928119976929],
                    [-122.41262119433293, 37.759274384670135]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 20th to 21st
                    [-122.41258506063635, 37.75885948369384],
                    [-122.41254649838305, 37.758447302964],
                    [-122.41241034369787, 37.758453818272855],
                    [-122.41244886661826, 37.758868426616274],
                    [-122.41258506063635, 37.75885948369384]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }] //end of features
          },
        }, //end of source
        'layout': {
          'visibility': 'visible'
        },
        "paint": {
          "fill-color": "#6ADC07",
          "fill-opacity": 0.8
        }
      }); //end of sponsors layer
      map.addLayer({ //stages layer
        "id": "Stages",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//17th and harrison
                    [-122.41311, 37.76429],
                    [-122.41296, 37.76430],
                    [-122.41295, 37.76421],
                    [-122.41310, 37.76420]
                  ]
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//18th and Alabama Stage
                    [-122.412307, 37.761703],
                    [-122.41217, 37.76171],
                    [-122.412154, 37.761567],
                    [-122.41229, 37.76156]
                  ]
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//20th and Alabama Stage
                    [-122.41192, 37.75916],
                    [-122.41177, 37.75917],
                    [-122.41175, 37.75900],
                    [-122.41190, 37.75899]
                  ]
                ]
              }
            }, {
              "geometry": {
                "coordinates": [
                  [// beer garden stage
                    [-122.41232502011785, 37.756152720198074],
                    [-122.41231921942088, 37.75608309664317],
                    [-122.41218316673368, 37.7560901840739],
                    [-122.41218896743065, 37.756158973813214],
                    [-122.41232502011785, 37.756152720198074]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//23rd and Alabama Stage
                    [-122.41142, 37.75432],
                    [-122.41131, 37.75433],
                    [-122.41130, 37.75424],
                    [-122.41141, 37.75423]
                  ]
                ]
              }
            }] //end of features
          },
        }, //end of source
        'layout': {
          'visibility': 'visible'
        },
        "paint": {
          "fill-color": "#B806AD",
          "fill-opacity": 0.8
        }
      }); //end of stages layer
      map.addLayer({ //ninolandia layer
        'id': 'Niñolandia',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.4122892363515, 37.755772069202635],
                  [-122.41215192954525, 37.755780583086874],
                  [-122.4120181770346, 37.754308323377046],
                  [-122.41214485260596, 37.75429980947314],
                  [-122.4122892363515, 37.755772069202635]
                ]
              ]
            }
          }
        },
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          // 'fill-color': '#FE5D4D',
          'fill-color': '#fe4dc6',
          'fill-opacity': 0.8
        }
      }); // end of ninolandia layer
      map.addLayer({ //First-Aid & Lost and Found
        'id': 'First-Aid Lost&Found',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.41300557887726, 37.760636095960365],
                  [-122.41300232088146, 37.760598748396916],
                  [-122.41292657245354, 37.76060132409086],
                  [-122.41292901595038, 37.76063931557613],
                  [-122.41300557887726, 37.760636095960365]
                ]
              ]
            }
          }
        },
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'fill-color': '#F91405',
          'fill-opacity': 0.8
        }
      }); // end of First-Aid & Lost and Found Layer
      map.addLayer({ //health and wellness pavilion
        'id': 'Health&Wellness',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.41215, 37.754218],
                  [-122.41210, 37.75422],
                  [-122.41209, 37.75403],
                  [-122.41214, 37.75403],
                  [-122.412141, 37.754031]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#0652DD',//blue
          'fill-opacity': 0.8
        }
      }); // end of health and wellness
      map.addLayer({ //Native and African Roots Center
        'id': 'Native & African Roots Center',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.41214, 37.75402],
                  [-122.412087, 37.75402],
                  [-122.41207, 37.75381],
                  [-122.412125, 37.75381],
                  [-122.412129, 37.75381]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#1B1464',
          'fill-opacity': 0.8
        }
      }); // End Native and African American Roots Center
      map.addLayer({ //beverages layer
        "id": "Beverages",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "geometry": {
                "coordinates": [// 17th and treat
                  [-122.41350755072068, 37.763907167595505],
                  [-122.41347773753797, 37.763998613473376],
                  [-122.4133990307416, 37.76404292225618]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// harrison and mariposa
                  [-122.4128448854279, 37.76289997102917],
                  [-122.41266402111806, 37.76291014649226]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 18th
                  [-122.41373264997846, 37.76217969325498],
                  [-122.41361693973717, 37.76218603316299]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": [//20th st Beverages
                  [-122.41345, 37.75896],
                  [-122.41329, 37.75897]
                ]
              }
            }, {
              "geometry": {
                "coordinates": [// beer garden 21st to 22nd
                  [-122.41233263132291, 37.75667268627208],
                  [-122.41229888182113, 37.756290785209345]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }]
          },
        },
        "layout": {
          "visibility": "visible",
          "line-join": "round",
          "line-cap": "butt"
        },
        "paint": {
          "line-color": "#ff7033",
          "line-width": 6,
          "line-opacity": 0.8
        }
      }); // end of beverages layer
      map.addLayer({ //foodbooth layer
        "id": "Food-booths",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "geometry": {
                "coordinates": [
                  [// 17th to mariposa
                    [-122.41306164394156, 37.76391073767827],
                    [-122.41297468419789, 37.76300517271194],
                    [-122.41284203508651, 37.76301196053748],
                    [-122.41292134767447, 37.76391866085616],
                    [-122.41306164394156, 37.76391073767827]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [//19th to mistral
                    [-122.41274357497461, 37.760578919935625],
                    [-122.41260571995002, 37.76058777891177],
                    [-122.41257805894591, 37.76030940756479],
                    [-122.41271595424978, 37.76030054132124],
                    [-122.41274357497461, 37.760578919935625]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 20th to 21st
                    [-122.41249494911742, 37.75796677776613],
                    [-122.41236170046854, 37.75797480578177],
                    [-122.41233912679898, 37.75769557931005],
                    [-122.41246763256154, 37.75768645196504],
                    [-122.41249494911742, 37.75796677776613]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [
                  [// 21st to 22nd
                    [-122.41243956789005, 37.75736887430172],
                    [-122.41230658144588, 37.75737573218724],
                    [-122.41226510490726, 37.75695799854121],
                    [-122.4123990236754, 37.75695217050236],
                    [-122.41243956789005, 37.75736887430172]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }]
          },
        },
        'layout': {
          'visibility': 'visible'
        },
        "paint": {
          "fill-color": "#00B1FC",
          "fill-opacity": 0.8
        }
      }); //end of food-booth layer
      map.addLayer({ // Dj Layer
        "id": "DJ",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//18th street between bathrooms
                    [-122.41343105112946, 37.762239917327506],
                    [-122.41342808327141, 37.76220260728232],
                    [-122.41334425100149, 37.76220709260757],
                    [-122.41334839764704, 37.76224540724159]
                  ]
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//19th street next to bathroom
                    [-122.41230399016992, 37.76039308677072],
                    [-122.412300360538, 37.76035291365854],
                    [-122.41223049017127, 37.76035793529732],
                    [-122.41223502720668, 37.760397391030224]
                  ]
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [//22nd street right of bathrooms
                    [-122.41198612458838, 37.755911989282254],
                    [-122.41198079636422, 37.75585582077622],
                    [-122.41184936678911, 37.75586284183902],
                    [-122.41185469501681, 37.75592041455113]
                  ]
                ]
              }
            }] //end of features
          },
        }, //end of source
        'layout': {
          'visibility': 'visible'
        },
        "paint": {
          "fill-color": "#49e6e9",
          "fill-opacity": 0.8
        }
      }); //end of dj layer
      map.addLayer({ //foodtruck layer
        "id": "Food-trucks",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "geometry": {
                "coordinates": [// 17th to mariposa north
                  [-122.41299597652377, 37.76401427813184],
                  [-122.4129908295767, 37.76395645208635]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 17th to mariposa south
                  [-122.41290058248352, 37.7629650078037],
                  [-122.41289549024684, 37.76290699161264]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 18th
                  [-122.41277524842072, 37.76158785370423],
                  [-122.41277083159433, 37.7615458439753]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 21st north
                  [-122.4123975081749, 37.757633515609044],
                  [-122.4123919766892, 37.75757491423346]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 21st south
                  [-122.41238755149847, 37.757532056405296],
                  [-122.41238202001273, 37.75747345502971]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, {
              "geometry": {
                "coordinates": [// 23rd
                  [-122.41198026484055, 37.754248764612086],
                  [-122.41190315890636, 37.754253261916105]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }]
          },
        },
        "layout": {
          "visibility": "visible",
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#2e9112",
          "line-width": 7
        }
      }); // end of food-truck layer
      map.addLayer({ //lowriders layer
        'id': 'Lowriders',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.41283707072746, 37.759925940158794],
                  [-122.41278855581706, 37.75947234800299],
                  [-122.41314503495866, 37.75944900127243],
                  [-122.4131977685587, 37.75990092595309],
                  [-122.41283707072746, 37.759925940158794]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#F0993F',
          'fill-opacity': 0.8
        }
      }); // end of lowriders layer
      //all features above
    });

    //start map layer toggle
    var toggleableLayerIds = ['First-Aid Lost&Found', 'Beverages', 'Lowriders', 'Exhibitors', 'Sponsors', 'Food-trucks', 'DJ', 'Food-booths', 'Health&Wellness', 'Niñolandia', "Stages", 'Native & African Roots Center'];

    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];

      var link = document.createElement('button');

      link.textContent = id;

      switch (link.textContent) {
        case "Exhibitors": {
          link.className = 'btn btn-sm btn-block btn-exhibit font-weight-bold p-1 m-1';
          break;
        }
        case "Sponsors": {
          link.className = 'btn btn-sm btn-block btn-sponsor font-weight-bold p-1 m-1';
          break;
        }
        case "Stages": {
          link.className = 'btn btn-sm btn-block btn-stage font-weight-bold p-1 m-1';
          break;
        }
        case "Food-booths": {
          link.className = 'btn btn-sm btn-block btn-fbooth font-weight-bold p-1 m-1';
          break;
        }
        case "Food-trucks": {
          link.className = 'btn btn-sm btn-block btn-ftruck font-weight-bold p-1 m-1';
          break;
        }
        case "Beverages": {
          link.className = 'btn btn-sm btn-block btn-bev font-weight-bold p-1 m-1';
          break;
        }
        case "Niñolandia": {
          link.className = 'btn btn-sm btn-block btn-nino font-weight-bold p-1 m-1';
          break;
        }
        case "Lowriders": {
          link.className = 'btn btn-sm btn-block btn-low font-weight-bold p-1 m-1';
          break;
        }
        case "Health&Wellness": {
          link.className = 'btn btn-sm btn-block btn-health font-weight-bold p-1 m-1';
          break;
        }
        case "Native & African Roots Center": {
          link.className = 'btn btn-sm btn-block btn-native font-weight-bold p-1 m-1';
          break;
        }
        case "DJ": {
          link.className = 'btn btn-sm btn-block btn-dj font-weight-bold p-1 m-1';
          break;
        }
        case "First-Aid Lost&Found": {
          link.className = 'btn btn-sm btn-block btn-firstAid font-weight-bold p-1 m-1';
          break;
        }
        default: {
          link.className = 'btn btn-sm btn-block btn-primary font-weight-bold p-1 m-1'
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
            case "Exhibitors": {
              this.className = 'btn btn-sm btn-block btn-exhibit font-weight-bold p-1 m-1';
              break;
            }
            case "Sponsors": {
              this.className = 'btn btn-sm btn-block btn-sponsor font-weight-bold p-1 m-1';
              break;
            }
            case "Stages": {
              this.className = 'btn btn-sm btn-block btn-stage font-weight-bold p-1 m-1';
              break;
            }
            case "Food-booths": {
              this.className = 'btn btn-sm btn-block btn-fbooth font-weight-bold p-1 m-1';
              break;
            }
            case "Food-trucks": {
              this.className = 'btn btn-sm btn-block btn-ftruck font-weight-bold p-1 m-1';
              break;
            }
            case "Beverages": {
              this.className = 'btn btn-sm btn-block btn-bev font-weight-bold p-1 m-1';
              break;
            }
            case "Niñolandia": {
              this.className = 'btn btn-sm btn-block btn-nino font-weight-bold p-1 m-1';
              break;
            }
            case "Lowriders": {
              this.className = 'btn btn-sm btn-block btn-low font-weight-bold p-1 m-1';
              break;
            }
            case "Health&Wellness": {
              this.className = 'btn btn-sm btn-block btn-health font-weight-bold p-1 m-1';
              break;
            }
            case "Native & African Roots Center": {
              this.className = 'btn btn-sm btn-block btn-native font-weight-bold p-1 m-1';
              break;
            }
            case "DJ": {
              this.className = 'btn btn-sm btn-block btn-dj font-weight-bold p-1 m-1';
              break;
            }
            case "First-Aid Lost&Found": {
              this.className = 'btn btn-sm btn-block btn-firstAid font-weight-bold p-1 m-1';
              break;
            }
            default: {
              link.className = 'btn btn-sm btn-block btn-primary font-weight-bold p-1 m-1'
              break;
            }
          }
        }
      };
      var layers = document.getElementById('menu');
      layers.appendChild(link);
    }
    // end buildmap
  }
}

