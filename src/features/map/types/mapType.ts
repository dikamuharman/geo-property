import { Map } from 'mapbox-gl';

export interface MapState {
  center: [number, number];
  zoom: number;
  map?: Map;
  setMap: (map: Map) => void;
}
