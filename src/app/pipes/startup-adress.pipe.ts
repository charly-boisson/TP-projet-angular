import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdresse'
})
export class StartupAdressPipe implements PipeTransform {

  transform(value: string): String {
    var result = "non";
    if(value){
      result = "oui";
    }
    return result;
  }

}
