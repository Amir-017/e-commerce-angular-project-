import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDescription',
})
export class SplitDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(10);
  }
}
