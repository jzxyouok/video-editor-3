import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { PanelComponent } from './components/panel/panel.component';
import { TrackComponent } from './components/track/track.component';
import { DragItemComponent } from './components/drag-item/drag-item.component';
import { DragMoveItemComponent } from './components/drag-move-item/drag-move-item.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';

import { PanelDataService } from './services/panel-data.service';
import { DynamicImageDirective } from './directives/dynamic-image.directive';

import { CoordsService } from './services/coords.service';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PanelComponent,
    TrackComponent,
    DragItemComponent,
    DragMoveItemComponent,
    TimeFormatPipe,
    DynamicImageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      PanelDataService,
      CoordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
