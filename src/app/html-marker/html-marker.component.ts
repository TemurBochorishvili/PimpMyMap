import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-html-marker',
  templateUrl: './html-marker.component.html'
})
export class HtmlMarkerComponent {
  @Input() data;
}
