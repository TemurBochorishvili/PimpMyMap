import { Injectable } from '@angular/core';
import { LatLngExpression } from 'leaflet';

export interface Marker {
  id: number;
  name: String;
  description: String;
  position: LatLngExpression;
}

@Injectable()
export class DataService {
  markers: Marker[] = [
    {
      id: 1,
      name: 'Marker name 1',
      description: 'Hello World',
      position: [41.716667, 44.783333]
    },
    {
      id: 2,
      name: 'Marker name 2',
      description: 'Hello World',
      position: [42.716667, 44.783333]
    },
    {
      id: 3,
      name: 'Marker name 3',
      description: 'Hello World',
      position: [41.9, 44.783333]
    }
  ];

  getMarkers() {
    return this.markers.slice();
  }

  getMarkerById(id) {
    return this.markers.slice().filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for (let marker of this.markers) {
      marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

  removeMarker(id){
    this.markers.splice(id,1);
  }

}