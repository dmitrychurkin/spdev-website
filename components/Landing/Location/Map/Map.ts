import mapStyles from "components/Landing/Location/Map/mapStyle.json";
import ukraineArray from "components/Landing/Location/Map/ukraine.json";
import donetskArray from "components/Landing/Location/Map/donetskRegion.json";
import ivanoFrankivskArray from "components/Landing/Location/Map/ivanoFrankivskRegion.json";

const ukrainePoints = ukraineArray.map((point: Array<number>) => ({
  lat: point[1],
  lng: point[0],
}));

const donetskPoints = donetskArray.map((point: Array<number>) => ({
  lat: point[1],
  lng: point[0],
}));

const ivanoFrankivskPoints = ivanoFrankivskArray.map(
  (point: Array<number>) => ({
    lat: point[1],
    lng: point[0],
  })
);

export type MapRegions = typeof Map.IVANO_FRANKIVSK | typeof Map.MARIUPOL;

type MapMarkers = {
  [region in MapRegions]: google.maps.Marker;
};

type MapPolygons = {
  [region in MapRegions | typeof Map.UKRAINE]: google.maps.Polygon;
};

export default class Map {
  private static assetUrl = "//maps.google.com/mapfiles/ms/icons/";
  private static ZOOM = 6; // 11
  public static readonly UKRAINE = 1;
  public static readonly IVANO_FRANKIVSK = 2;
  public static readonly MARIUPOL = 3;

  private _polygons: MapPolygons = {} as MapPolygons;
  private _markers: MapMarkers = {} as MapMarkers;

  private static get defaultOptions(): google.maps.MapOptions {
    return {
      zoom: this.ZOOM,
      disableDefaultUI: true,
      gestureHandling: "none",
      // Ukraine
      center: new google.maps.LatLng(48.6841619, 31.59), //new google.maps.LatLng(40.67,-73.94)
      styles: mapStyles,
      backgroundColor: "#222222",
    };
  }

  public readonly map: google.maps.Map;

  public constructor({
    el,
    options = new.target.defaultOptions,
  }: MapClassArgs) {
    this.map = new google.maps.Map(el, options);

    this._setMarkers();
    this._setPolygons();
  }

  public handleTransition(region: MapRegions) {
    const marker = this._markers[region];
    const map = marker.getMap();
    const markerPosition = marker.getPosition();

    if (map instanceof google.maps.Map && markerPosition) {
      map.setCenter(markerPosition);
      this.smoothZoom(map, 9, map.getZoom());
    }
  }

  private _setMarkers() {
    this._markers = {
      [Map.IVANO_FRANKIVSK]: new google.maps.Marker({
        position: new google.maps.LatLng(48.9226, 24.7111),
        icon: {
          url: `${Map.assetUrl}green-dot.png`,
        },
      }),
      [Map.MARIUPOL]: new google.maps.Marker({
        position: new google.maps.LatLng(47.0971, 37.5434),
        icon: {
          url: `${Map.assetUrl}blue-dot.png`,
        },
      }),
    };

    Object.values(this._markers).forEach((marker: google.maps.Marker) => {
      marker.setMap(this.map);
    });
  }

  private _setPolygons() {
    this._polygons = {
      [Map.UKRAINE]: new google.maps.Polygon({
        paths: ukrainePoints,
        strokeColor: "#767676",
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: "#333333",
        fillOpacity: 1,
      }),
      [Map.IVANO_FRANKIVSK]: new google.maps.Polygon({
        paths: ivanoFrankivskPoints,
        strokeColor: "#333333",
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: "#333333",
        fillOpacity: 1,
      }),
      [Map.MARIUPOL]: new google.maps.Polygon({
        paths: donetskPoints,
        strokeColor: "#333333",
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: "#333333",
        fillOpacity: 1,
      }),
    };

    Object.values(this._polygons).forEach((polygon: google.maps.Polygon) => {
      polygon.setMap(this.map);
    });

    google.maps.event.addListener(this.map, "zoom_changed", () => {
      const zoom = this.map.getZoom();
      const polygon = this._polygons[Map.UKRAINE];

      if (!polygon) return;
      if (zoom > 7) {
        polygon.setOptions({ fillOpacity: 0, strokeOpacity: 0 });
      } else {
        polygon.setOptions({ fillOpacity: 1, strokeOpacity: 1 });
      }
    });
  }

  private smoothZoom(map: google.maps.Map<Element>, max: number, cnt: number) {
    // https://stackoverflow.com/questions/4752340/how-to-zoom-in-smoothly-on-a-marker-in-google-maps
    if (cnt >= max) {
      return;
    }

    const z = google.maps.event.addListener(map, "zoom_changed", () => {
      google.maps.event.removeListener(z);
      this.smoothZoom(map, max, cnt + 1);
    });

    setTimeout(() => map.setZoom(cnt), 80);
  }
}

interface MapClassArgs {
  readonly el: Element;
  readonly style?: { name: string; styling: google.maps.MapTypeStyle[] };
  readonly markers?: Array<google.maps.Marker>;
  readonly options?: google.maps.MapOptions;
}
