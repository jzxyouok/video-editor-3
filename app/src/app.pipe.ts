import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'secondFormat'})
class secondFormat implements PipeTransform {
    transform(value: number) {
        var h = 0, m = 0, s = 0;
        var fillZero = function (v) {
            return v >= 10 ? v : '0' + v;
        };
        h = Math.floor(value / 3600);
        m = Math.floor(value % 3600 / 60);
        s = value % 60;
        if (h === 0) {
            return fillZero(m) + ':' + fillZero(s);
        }
        return fillZero(h) + ':' + fillZero(m) + ':' + fillZero(s);
    }
}

export {secondFormat}