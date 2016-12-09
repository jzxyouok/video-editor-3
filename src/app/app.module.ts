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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PanelComponent,
    TrackComponent,
    DragItemComponent,
    DragMoveItemComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
