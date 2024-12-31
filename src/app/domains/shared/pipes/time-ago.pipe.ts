import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  }

  // Duplicate function implementation
  /*
  transform(value: string): string {
    console.log('value', value);
    const pastDate = new Date(value);
    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - pastDate.getMonth();

    const totalMonths = yearsDifference * 12 + monthsDifference;

    console.log(`han pasado ${totalMonths} meses`);
    return totalMonths > 0 ? `hace ${totalMonths} meses` : 'just now';
  }
  */


}
