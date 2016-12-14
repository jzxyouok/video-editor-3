import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PanelComponent } from './panel/panel.component';
import { TrackComponent } from './track/track.component';
import { DragItemComponent } from './drag-item/drag-item.component';
import { DragMoveItemComponent } from './drag-move-item/drag-move-item.component';
import { TimeFormatPipe } from './time-format.pipe';

import { PanelDataService } from './panel-data.service';
import { DynamicImageDirective } from './dynamic-image.directive';

import { CoordsService } from './coords.service';
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
