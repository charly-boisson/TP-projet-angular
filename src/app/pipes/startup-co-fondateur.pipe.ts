import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startupCoFondateur'
})
export class StartupCoFondateurPipe implements PipeTransform {

  transform(value: number, args?: any): String {
    var result = "Aucun";
    if(value == 1 ){
      result = "unique";
    }
    if(value == 2 ){
      result = "couple";
    }
    if(value >= 3 ){
      result = "groupes";
    }
    return result;
  }

}
