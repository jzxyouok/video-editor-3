import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onMouseEnter() {
        console.log('mouse enter');
    }
    onMouseLeave() {
        console.log('mouse leave');
    }
}
