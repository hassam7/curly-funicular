import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000) {
      return 'medium';
    }
    else {
      return 'Best';
    }
  }
}
