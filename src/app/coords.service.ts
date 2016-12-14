import { Injectable } from '@angular/core';

@Injectable()
export class CoordsService {
    getMouseCoords(event) {
        return {
            mx: event.clientX,
            my: event.clientY
        };
    }
    getElementCoords(elem) {
        return {
            ex: elem.offsetLeft,
            ey: elem.offsetTop
        }
    }
}
