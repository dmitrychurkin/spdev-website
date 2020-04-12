export default class Map {
  private static ZOOM = 6; // 11

  private static get mapStyles(): Array<{ name: string, styling: google.maps.MapTypeStyle[] }> {
    return [
      {
        name: "Assassin&#39;s Creed IV",
        styling: [
          {
              "featureType": "all",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [
                  {
                    "visibility": "off"
                  },
                  {
                    "saturation": -100
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
        ]
      }
    ]
  }

  private static get defaultOptions(): google.maps.MapOptions {
    return {
      zoom: this.ZOOM,
      disableDefaultUI: true,
      // Ukraine
      center: new google.maps.LatLng(48.6841619, 31.5054371), //new google.maps.LatLng(40.67,-73.94)
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, this.mapStyles[0].name]
      }
    }
  }

  public readonly map: google.maps.Map;
  
  private _markers: Array<google.maps.Marker>;
  public get markers() {
    return this._markers;
  }
  public set markers(mArr: Array<google.maps.Marker>) {
    this._markers = mArr;
  }

  public constructor({
    el,
    style: { name, styling } = new.target.mapStyles[0],
    markers = [
      // Ivano-Frankovsk
      new google.maps.Marker({
        position: new google.maps.LatLng(48.9226, 24.7111)
      }),
      // Mariupol
      new google.maps.Marker({
        position: new google.maps.LatLng(47.0971, 37.5434)
      })
    ],
    options = new.target.defaultOptions
  }: IMapClassArgs) {
    this.map = new google.maps.Map(el, options);
  
    this._markers = markers;
    this.setMapForMarkers();

    this.map.mapTypes.set(name, new google.maps.StyledMapType(styling, {
      name
    }));
    this.map.setMapTypeId(name);
  }

  public handleTransition(index: number) {
    const marker = this.markers[index];
    const map = marker.getMap();
    if (map instanceof google.maps.Map) {
      map.setCenter(marker.getPosition()!);
      this.smoothZoom(map, 12, map.getZoom());
    }
  }

  private setMapForMarkers() {
    for (const marker of this.markers) {
      marker.setMap(this.map);
    }
  }

  private smoothZoom(map: google.maps.Map<Element>, max: number, cnt: number) {
    // https://stackoverflow.com/questions/4752340/how-to-zoom-in-smoothly-on-a-marker-in-google-maps
    if (cnt >= max) {
      return;
    }
  
    const z = google.maps.event.addListener(map, 'zoom_changed', () => {
      google.maps.event.removeListener(z);
      this.smoothZoom(map, max, cnt + 1);
    });

    setTimeout(() => map.setZoom(cnt), 80);
  }
}

interface IMapClassArgs {
  readonly el: Element;
  readonly style?: { name: string, styling: google.maps.MapTypeStyle[] };
  readonly markers?: Array<google.maps.Marker>;
  readonly options?: google.maps.MapOptions
}
