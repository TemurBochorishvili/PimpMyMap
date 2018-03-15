import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'

import { AppComponent } from './app.component';
import { HtmlMarkerComponent } from './html-marker/html-marker.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlMarkerComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot()
  ],
  providers: [DataService],
  entryComponents: [HtmlMarkerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
