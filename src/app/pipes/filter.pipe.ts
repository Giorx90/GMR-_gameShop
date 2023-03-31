import { Pipe, PipeTransform } from '@angular/core';
import { FormateGame } from '../models/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: FormateGame[], filter: string): FormateGame[] {
    const lowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredGames: FormateGame[] = list.filter((el: FormateGame) => {
      return el.title.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredGames;
  }

}
