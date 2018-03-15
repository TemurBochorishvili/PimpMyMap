import { Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, DoCheck } from '@angular/core';
import { tileLayer, latLng, marker, Marker, LeafletMouseEvent, circle, Circle } from 'leaflet';

import { HtmlMarkerComponent } from './html-marker/html-marker.component';
import { DataService } from './data.service';

interface MarkerMetaData {
  name: String;
  markerInstance: Circle;
  componentInstance: ComponentRef<HtmlMarkerComponent>
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  map;
  markers: MarkerMetaData[] = [];
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(41.716667, 44.783333),
  };


  constructor(private dataservice: DataService, private resolver: ComponentFactoryResolver, private injector: Injector) { }

  onMapReady(map) {
    this.map = map
  }

  addMarker() {
    for (const entry of this.dataservice.getMarkers()) {
      const factory = this.resolver.resolveComponentFactory(HtmlMarkerComponent);

      const component = factory.create(this.injector);

      component.instance.data = entry;

      component.changeDetectorRef.detectChanges();

      let m = circle(entry.position);

      m.setRadius(5000);
   
      const popupContent = component.location.nativeElement;

      m.bindPopup(popupContent).openPopup();
      
      m.addTo(this.map);
      
      this.markers.push({
        name: entry.name,
        markerInstance: m,
        componentInstance: component
      });

    }
  }

  removeMarker(marker) {
    
    const idx = this.markers.indexOf(marker);
    
    this.markers.splice(idx, 1);
    this.dataservice.removeMarker(idx);

    marker.markerInstance.removeFrom(this.map);

    marker.componentInstance.destroy();
  }

}
