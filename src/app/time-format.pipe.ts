import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

    private addZero(number: number) {
        return number > 10 ? String(number) : '0' + number;
    }

    private formatTime(time: number, sep) {
        let h = Math.floor(time / 3600),
            m = Math.floor((time - h * 3600) / 60),
            s = time % 60;
        return [this.addZero(h), this.addZero(m), this.addZero(s)].join(sep);
    }

    transform(time: number, format: string): any {
        if (format.toLocaleLowerCase() === 'hh:mm:ss') {
            return this.formatTime(time, ':');
        } else if (format.toLocaleLowerCase() === 'hh/mm/ss') {
            return this.formatTime(time, '/');
        } else if (format.toLocaleLowerCase() === 'hh-mm-ss') {
            return this.formatTime(time, '-');
        }
    }

}
