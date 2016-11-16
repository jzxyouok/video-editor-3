import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {secondFormat} from './app.pipe';

import {Drag} from './drag';
import {DragItem} from './drag-item';

import {AppComponent}   from './app.component';
import {Player} from './app.player';
import {Panel} from './app.panel';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        secondFormat,

        Drag,
        DragItem,

        AppComponent,
        Player,
        Panel
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
