import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    const maxlenght = 30;
    return value.length > maxlenght ? value.slice(0, maxlenght) + "..." : value;
  }

}
