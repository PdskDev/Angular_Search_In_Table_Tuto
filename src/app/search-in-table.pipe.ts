import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInTable',
})
export class SearchInTablePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }

    return value.filter((val: { id: string; email: string }) => {
      let reVal =
        val.id.toLocaleLowerCase().includes(args) ||
        val.email.toLocaleLowerCase().includes(args);
      return reVal;
    });
  }
}
