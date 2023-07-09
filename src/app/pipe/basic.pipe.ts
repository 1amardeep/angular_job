import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basic',
})
export class BasicPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    if (args.indexOf('uppercase') > -1) {
      value = value.toUpperCase();
    }
    if (args.indexOf('extension') > -1) {
      value = value.substring(0, 6) + '' + '....';
    }
    return value;
  }
}
