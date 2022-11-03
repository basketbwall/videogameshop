import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    let retVal = "";
    for (let i=0; i<value.length; i++) {
      retVal += value[i]["name"] + ", "
      if (retVal.length >= 30) {
        return retVal
      }
    }
    return retVal;
  }

}
