import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const dateObj = new Date(value);
    const day = this.padZero(dateObj.getDate());
    const month = this.padZero(dateObj.getMonth() + 1);
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = this.padZero(dateObj.getMinutes());
    const seconds = this.padZero(dateObj.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${day}-${month}-${year} ${this.convertTo12HourFormat(hours)}:${minutes}:${seconds} ${ampm}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  private convertTo12HourFormat(hours: number): number {
    return hours % 12 || 12;
  }
}
