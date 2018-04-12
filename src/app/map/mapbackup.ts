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
      zoom: 14.8,
      center: this.center,
      //maxBounds: [this.sw, this.ne
    });
    
    // disable map rotation using right click + drag
    this.map.dragRotate.disable();

    // disable map rotation using touch rotation gesture
    this.map.touchZoomRotate.disableRotation();

    //user tracking
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Toggle loading symbol
    this.map.on('load', (event) => {
      this.loading = false;

      //venue layers from below this point
      // this.map.addLayer({ //entrances layer
      //   "id": "entrances",
      //   "type": "line",
      //   "source": {
      //     "type": "geojson",
      //     "data": {
      //       "type": "FeatureCollection",
      //       "features": [{ // harrison and treat
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41319498358952,
      //               37.76499934234809
      //             ],
      //             [-122.41300261205764,
      //               37.76501008230909
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 18th and treat
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41387973493144,
      //               37.76224759161056
      //             ],
      //             [-122.41386546470424,
      //               37.762095319703306
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 20th and treat
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41352096295195,
      //               37.75905716406815
      //             ],
      //             [-122.4135063040141,
      //               37.75890478676594
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 23rd and treat
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41305051770722,
      //               37.754256213626704
      //             ],
      //             [-122.41303417953634,
      //               37.75410311504902
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 24th and harrison
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41206198326029,
      //               37.75312241014565
      //             ],
      //             [-122.41187008035057,
      //               37.75313386136776
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }] //end of features
      //     },
      //   }, //end of source
      //   "layout": {
      //     "line-join": "round",
      //     "line-cap": "round"
      //   },
      //   "paint": {
      //     "line-color": "#F76C04",
      //     "line-width": 7,
      //     "line-opacity": 0.8
      //   }
      // }); //end of entrances layer
      this.map.addLayer({ //exhibits layer
        "id": "exhibits",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{ // mariposa to 18th
              "geometry": {
                "coordinates": [
                  [
                    [-122.4129496435111,
                      37.76275205286228
                    ],
                    [-122.41281605649516,
                      37.76276017659701
                    ],
                    [-122.41277898977586,
                      37.76233919188499
                    ],
                    [-122.41291294378654,
                      37.76233280892478
                    ],
                    [-122.4129496435111,
                      37.76275205286228
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 18th
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41289010627348,
                      37.76211901304383
                    ],
                    [
                      -122.41285825217243,
                      37.761740861773575
                    ],
                    [
                      -122.41272517695681,
                      37.76174758197189
                    ],
                    [
                      -122.41275677403551,
                      37.762126508061385
                    ],
                    [
                      -122.41289010627348,
                      37.76211901304383
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 19th
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41283430590283,
                      37.761456578902354
                    ],
                    [
                      -122.41269617620674,
                      37.761463324978294
                    ],
                    [
                      -122.41262727918907,
                      37.76073152509382
                    ],
                    [
                      -122.41276518690135,
                      37.76072531697854
                    ],
                    [
                      -122.41283430590283,
                      37.761456578902354
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 19th to 20th north
              "geometry": {
                "coordinates": [
                  [
                    [-122.41270863993874,
                      37.76019387902903
                    ],
                    [-122.41257071226389,
                      37.760199974601576
                    ],
                    [-122.4125135725501,
                      37.75955063136287
                    ],
                    [-122.41264871580469,
                      37.75954409999984
                    ],
                    [-122.41270863993874,
                      37.76019387902903
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 19th to 20th south
              "geometry": {
                "coordinates": [
                  [
                    [-122.41263567317719,
                      37.7594299519115
                    ],
                    [-122.41262127552739,
                      37.75927417928905
                    ],
                    [-122.41248537060882,
                      37.759280938431985
                    ],
                    [-122.41249951430532,
                      37.75943691922751
                    ],
                    [-122.41263567317719,
                      37.7594299519115
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { //19th to 20th southmost
              "geometry": {
                "coordinates": [
                  [
                    [-122.41261158693233,
                      37.75918246285262
                    ],
                    [-122.41260552917787,
                      37.759112673390135
                    ],
                    [-122.41246914580242,
                      37.75912000337401
                    ],
                    [-122.41247566720536,
                      37.75918870024422
                    ],
                    [-122.41261158693233,
                      37.75918246285262
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 20th to 21st
              "geometry": {
                "coordinates": [
                  [
                    [-122.41254457472333,
                      37.758415484069985
                    ],
                    [-122.4124080969636,
                      37.75842268267354
                    ],
                    [-122.41236593627718,
                      37.75800595988299
                    ],
                    [-122.41250213898303,
                      37.75799979697048
                    ],
                    [-122.41254457472333,
                      37.758415484069985
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }] //end of features
          },
        }, //end of source
        "paint": {
          "fill-color": "#FD3468",
          "fill-opacity": 0.8
        }
      }); //end of exhibits layer
      this.map.addLayer({ //sponsors layer
        "id": "sponsors",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{ // mariposa to 18th north sponsor
              "geometry": {
                "coordinates": [
                  [
                    [-122.41295428861555,
                      37.76280536753585
                    ],
                    [-122.4129497371388,
                      37.762752778197935
                    ],
                    [-122.41281634373178,
                      37.762759697844686
                    ],
                    [-122.41282124532681,
                      37.76281228717765
                    ],
                    [-122.41295428861555,
                      37.76280536753585
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // mariposa to 18th south sponsor
              "geometry": {
                "coordinates": [
                  [
                    [-122.41291246919256,
                      37.76233420699937
                    ],
                    [-122.41290798820523,
                      37.76227932486556
                    ],
                    [-122.41277436966938,
                      37.76228600793374
                    ],
                    [-122.41277921938729,
                      37.762340779592975
                    ],
                    [-122.41291246919256,
                      37.76233420699937
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 18th north sponsor
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41289466720487,
                      37.762171841413945
                    ],
                    [
                      -122.41289012310116,
                      37.76211864790915
                    ],
                    [
                      -122.41275650103766,
                      37.76212643981812
                    ],
                    [
                      -122.41276114319558,
                      37.76217903909517
                    ],
                    [
                      -122.41289466720487,
                      37.762171841413945
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 18th south sponsor
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41285863957505,
                      37.7617418135344
                    ],
                    [
                      -122.41285394570917,
                      37.76168774215182
                    ],
                    [
                      -122.4127205058087,
                      37.76169463359871
                    ],
                    [
                      -122.41272519967457,
                      37.76174843992237
                    ],
                    [
                      -122.41285863957505,
                      37.7617418135344
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 19th north sponsor
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41283917917396,
                      37.76150958895782
                    ],
                    [
                      -122.41270121305102,
                      37.76151648053464
                    ],
                    [
                      -122.41269635154173,
                      37.76146280569182
                    ],
                    [
                      -122.41283415003427,
                      37.76145564904044
                    ],
                    [
                      -122.41283917917396,
                      37.76150958895782
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th to 19th south sponsor
              "geometry": {
                "coordinates": [
                  [
                    [-122.41276530627947,
                      37.76072585336709
                    ],
                    [-122.41276027289953,
                      37.760671728511056
                    ],
                    [-122.41262234011776,
                      37.760678892098255
                    ],
                    [-122.41262737414154,
                      37.760732751622456
                    ],
                    [-122.41276530627947,
                      37.76072585336709
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 19th to 20th north sponsor
              "geometry": {
                "coordinates": [
                  [
                    [-122.41271294851471,
                      37.76024632146357
                    ],
                    [-122.4125758399417,
                      37.76025267093789
                    ],
                    [-122.4125707025895,
                      37.760199133565706
                    ],
                    [-122.41270835910487,
                      37.76019235091408
                    ],
                    [-122.41271294851471,
                      37.76024632146357
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 19th to 20th south sponsor
              "geometry": {
                "coordinates": [
                  [
                    [-122.41262119433293,
                      37.759274384670135
                    ],
                    [-122.41261165476452,
                      37.75918205918366
                    ],
                    [-122.41247606070364,
                      37.75918860931691
                    ],
                    [-122.41248529389742,
                      37.75928119976929
                    ],
                    [-122.41262119433293,
                      37.759274384670135
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 20th to 21st
              "geometry": {
                "coordinates": [
                  [
                    [-122.41258506063635,
                      37.75885948369384
                    ],
                    [-122.41254649838305,
                      37.758447302964
                    ],
                    [-122.41241034369787,
                      37.758453818272855
                    ],
                    [-122.41244886661826,
                      37.758868426616274
                    ],
                    [-122.41258506063635,
                      37.75885948369384
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }] //end of features
          },
        }, //end of source
        "paint": {
          "fill-color": "#6ADC07",
          "fill-opacity": 0.8
        }
      }); //end of sponsors layer
      // this.map.addLayer({ //bathrooms layer
      //   "id": "bathrooms",
      //   "type": "line",
      //   "source": {
      //     "type": "geojson",
      //     "data": {
      //       "type": "FeatureCollection",
      //       "features": [{
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //treat and harrison north
      //             [-122.41326, 37.76526],
      //             [-122.41331, 37.76509]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //17th and harrison east
      //             [-122.41287, 37.76424],
      //             [-122.41266, 37.76425]
      //           ]
      //         }
      //       }, { // 17th and harrison west
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41334740343711,
      //               37.764065251585876
      //             ],
      //             [-122.41320787775052,
      //               37.76413124332082
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //17th and treat
      //             [-122.413596, 37.76373],
      //             [-122.41365, 37.76349]
      //           ]
      //         }
      //       }, { // harrison and mariposa
      //         "geometry": {
      //           "coordinates": [
      //             [-122.412598358654,
      //               37.762913898063886
      //             ],
      //             [-122.41237937492663,
      //               37.762926392924015
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 18th and harrison
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41304237911372,
      //               37.7622037933662
      //             ],
      //             [-122.41325947900982,
      //               37.762191566408134
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // 18th and harrison (west)
      //         "geometry": {
      //           "coordinates": [
      //             [-122.41355294055819,
      //               37.76217423411117
      //             ],
      //             [-122.41333755911919,
      //               37.7621869139295
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //19th west
      //             [-122.41318, 37.760627],
      //             [-122.41294, 37.76064]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //19th east
      //             [-122.41247, 37.760367],
      //             [-122.41219, 37.76038]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //Mistral
      //             [-122.41313, 37.760028],
      //             [-122.41287, 37.760043]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //Mistral (indoors)
      //             [-122.41345, 37.759798],
      //             [-122.41326, 37.75981]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //20th (west most)
      //             [-122.41316, 37.75901],
      //             [-122.41297, 37.75902]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //20th (west)
      //             [-122.41282, 37.759057],
      //             [-122.41259, 37.75907]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //20th (east)
      //             [-122.41217, 37.75908],
      //             [-122.41206, 37.759086]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //21st (west)
      //             [-122.41292, 37.75739],
      //             [-122.41260, 37.757406]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //21st (east)
      //             [-122.41220, 37.757468],
      //             [-122.41198, 37.75748]
      //           ]
      //         }
      //       }, { // beer garden inner
      //         "geometry": {
      //           "coordinates": [
      //             [
      //               -122.41234559803702,
      //               37.75679163629276
      //             ],
      //             [
      //               -122.41233927000258,
      //               37.756718258190375
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, { // beer garden stage
      //         "geometry": {
      //           "coordinates": [
      //             [
      //               -122.41226962366532,
      //               37.755969553880064
      //             ],
      //             [
      //               -122.41226118629118,
      //               37.75588616874536
      //             ]
      //           ],
      //           "type": "LineString"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //22nd and Harrison (east)
      //             [-122.41200, 37.75587],
      //             [-122.41186, 37.755878]
      //           ]
      //         }
      //       }, {
      //         "type": "Feature",
      //         "properties": {},
      //         "geometry": {
      //           "type": "LineString",
      //           "coordinates": [
      //             //23rd and Harrison (small)
      //             [-122.41237, 37.75424],
      //             [-122.41220, 37.75425]
      //           ]
      //         }
      //       }]
      //     },
      //   },
      //   "layout": {
      //     "line-join": "round",
      //     "line-cap": "butt"
      //   },
      //   "paint": {
      //     "line-color": "#0041D7",
      //     "line-width": 6,
      //     "line-opacity": 0.8
      //   }
      // }); // end of bathrooms layer
      this.map.addLayer({ //stages layer
        "id": "stages",
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
                  [
                    //17th and harrison
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
                  [
                    //18th and harrison Radio Habana Stage
                    [-122.41270, 37.761694],
                    [-122.41257, 37.76170],
                    [-122.412565, 37.761634],
                    [-122.412695, 37.761628]
                  ]
                ]
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    //18th and Alabama Stage
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
                  [
                    //20th and Alabama Stage
                    [-122.41192, 37.75916],
                    [-122.41177, 37.75917],
                    [-122.41175, 37.75900],
                    [-122.41190, 37.75899]
                  ]
                ]
              }
            }, { // beer garden stage
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41232502011785,
                      37.756152720198074
                    ],
                    [
                      -122.41231921942088,
                      37.75608309664317
                    ],
                    [
                      -122.41218316673368,
                      37.7560901840739
                    ],
                    [
                      -122.41218896743065,
                      37.756158973813214
                    ],
                    [
                      -122.41232502011785,
                      37.756152720198074
                    ]
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
                  [
                    //23rd and Alabama Stage
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
        "paint": {
          "fill-color": "#B806AD",
          "fill-opacity": 0.8
        }
      }); //end of stages layer
      this.map.addLayer({ //ninolandia layer
        'id': 'ninolandia',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [
                    -122.4122892363515,
                    37.755772069202635
                  ],
                  [
                    -122.41215192954525,
                    37.755780583086874
                  ],
                  [
                    -122.4120181770346,
                    37.754308323377046
                  ],
                  [
                    -122.41214485260596,
                    37.75429980947314
                  ],
                  [
                    -122.4122892363515,
                    37.755772069202635
                  ]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#FE5D4D',
          'fill-opacity': 0.8
        }
      }); // end of ninolandia layer
      this.map.addLayer({ //beverages layer
        "id": "beverages",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{ // 17th and treat
              "geometry": {
                "coordinates": [
                  [-122.41350755072068,
                    37.763907167595505
                  ],
                  [-122.41347773753797,
                    37.763998613473376
                  ],
                  [-122.4133990307416,
                    37.76404292225618
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // harrison and mariposa
              "geometry": {
                "coordinates": [
                  [-122.4128448854279,
                    37.76289997102917
                  ],
                  [-122.41266402111806,
                    37.76291014649226
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th
              "geometry": {
                "coordinates": [
                  [-122.41373264997846,
                    37.76217969325498
                  ],
                  [-122.41361693973717,
                    37.76218603316299
                  ]
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
                "coordinates": [
                  //20th st Beverages
                  [-122.41345, 37.75896],
                  [-122.41329, 37.75897]
                ]
              }
            }, { // beer garden 21st to 22nd
              "geometry": {
                "coordinates": [
                  [
                    -122.41233263132291,
                    37.75667268627208
                  ],
                  [
                    -122.41229888182113,
                    37.756290785209345
                  ]
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
                "coordinates": [
                  //23rd st Beverages
                  [-122.41176, 37.75428],
                  [-122.41165, 37.75429]
                ]
              }
            }]
          },
        },
        "layout": {
          "line-join": "round",
          "line-cap": "butt"
        },
        "paint": {
          "line-color": "#F8E401",
          "line-width": 6,
          "line-opacity": 0.8
        }
      }); // end of beverages layer
      this.map.addLayer({ //foodboth layer
        "id": "food-booth",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{ // 17th to mariposa
              "geometry": {
                "coordinates": [
                  [
                    [
                      -122.41306164394156,
                      37.76391073767827
                    ],
                    [
                      -122.41297468419789,
                      37.76300517271194
                    ],
                    [
                      -122.41284203508651,
                      37.76301196053748
                    ],
                    [
                      -122.41292134767447,
                      37.76391866085616
                    ],
                    [
                      -122.41306164394156,
                      37.76391073767827
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { //19th to mistral
              "geometry": {
                "coordinates": [
                  [
                    [-122.41274357497461,
                      37.760578919935625
                    ],
                    [-122.41260571995002,
                      37.76058777891177
                    ],
                    [-122.41257805894591,
                      37.76030940756479
                    ],
                    [-122.41271595424978,
                      37.76030054132124
                    ],
                    [-122.41274357497461,
                      37.760578919935625
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 20th to 21st
              "geometry": {
                "coordinates": [
                  [
                    [-122.41249494911742,
                      37.75796677776613
                    ],
                    [-122.41236170046854,
                      37.75797480578177
                    ],
                    [-122.41233912679898,
                      37.75769557931005
                    ],
                    [-122.41246763256154,
                      37.75768645196504
                    ],
                    [-122.41249494911742,
                      37.75796677776613
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }, { // 21st to 22nd
              "geometry": {
                "coordinates": [
                  [
                    [-122.41243956789005,
                      37.75736887430172
                    ],
                    [-122.41230658144588,
                      37.75737573218724
                    ],
                    [-122.41226510490726,
                      37.75695799854121
                    ],
                    [-122.4123990236754,
                      37.75695217050236
                    ],
                    [-122.41243956789005,
                      37.75736887430172
                    ]
                  ]
                ],
                "type": "Polygon"
              },
              "type": "Feature",
              "properties": {}
            }]
          },
        },
        "paint": {
          "fill-color": "#00B1FC",
          "fill-opacity": 0.8
        }
      }); //end of food-booth layer
      this.map.addLayer({ //foodtruck layer
        "id": "food-truck",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{ // 17th to mariposa north
              "geometry": {
                "coordinates": [
                  [-122.41299597652377,
                    37.76401427813184
                  ],
                  [-122.4129908295767,
                    37.76395645208635
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 17th to mariposa south
              "geometry": {
                "coordinates": [
                  [
                    -122.41290058248352,
                    37.7629650078037
                  ],
                  [
                    -122.41289549024684,
                    37.76290699161264
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 18th
              "geometry": {
                "coordinates": [
                  [
                    -122.41277524842072,
                    37.76158785370423
                  ],
                  [
                    -122.41277083159433,
                    37.7615458439753
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 21st north
              "geometry": {
                "coordinates": [
                  [-122.4123975081749,
                    37.757633515609044
                  ],
                  [-122.4123919766892,
                    37.75757491423346
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 21st south
              "geometry": {
                "coordinates": [
                  [-122.41238755149847,
                    37.757532056405296
                  ],
                  [-122.41238202001273,
                    37.75747345502971
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }, { // 23rd
              "geometry": {
                "coordinates": [
                  [-122.41198026484055,
                    37.754248764612086
                  ],
                  [-122.41190315890636,
                    37.754253261916105
                  ]
                ],
                "type": "LineString"
              },
              "type": "Feature",
              "properties": {}
            }]
          },
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#FE4101",
          "line-width": 5
        }
      }); // end of food-truck layer
      // this.map.addLayer({ //atm layer
      //   "id": "atm",
      //   "type": "circle",
      //   "source": {
      //     "type": "geojson",
      //     "data": {
      //       "type": "FeatureCollection",
      //       "features": [{ // 17th
      //         "geometry": {
      //           "coordinates": [-122.41300066764212,
      //             37.76406698017338
      //           ],
      //           "type": "Point"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "geometry": {
      //           "coordinates": [
      //             // 19th
      //             -122.41277927232473,
      //             37.76162007034719
      //           ],
      //           "type": "Point"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "geometry": {
      //           "coordinates": [
      //             // 20th
      //             -122.41252734755867,
      //             37.75902518103881
      //           ],
      //           "type": "Point"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }, {
      //         "geometry": {
      //           "coordinates": [
      //             // 24th
      //             -122.41197729942353,
      //             37.75324333712258
      //           ],
      //           "type": "Point"
      //         },
      //         "type": "Feature",
      //         "properties": {}
      //       }]
      //     },
      //   },
      //   "paint": {
      //     "circle-radius": 4,
      //     "circle-color": "#A3CB38"
      //   }
      // }); // end of atm layer
      this.map.addLayer({ //lowriders layer
        'id': 'lowriders',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              "coordinates": [
                [
                  [-122.41283707072746,
                    37.759925940158794
                  ],
                  [-122.41278855581706,
                    37.75947234800299
                  ],
                  [-122.41314503495866,
                    37.75944900127243
                  ],
                  [-122.4131977685587,
                    37.75990092595309
                  ],
                  [-122.41283707072746,
                    37.759925940158794
                  ]
                ]
              ]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#F91405',
          'fill-opacity': 0.8
        }
      }); // end of lowriders layer
      //all features above
    });
  }

  // Request permissions for geolocation & grab user location
  private geoloc() {

    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
      var startPos;
      var nudge = document.getElementById("nudge");

      var showNudgeBanner = function () {
        nudge.style.display = "block";
      };

      var hideNudgeBanner = function () {
        nudge.style.display = "none";
      };

      var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

      var geoSuccess = function (position) {
        hideNudgeBanner();
        // We have the location, don't display banner
        clearTimeout(nudgeTimeoutId);

        // Do magic with location
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
      };
      var geoError = function (error) {
        switch (error.code) {
          case error.TIMEOUT:
            // The user didn't accept the callout
            showNudgeBanner();
            break;
        }
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }

  };
}