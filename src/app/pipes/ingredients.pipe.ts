import { Pipe, PipeTransform } from '@angular/core';

import { BeerIngredients } from '../models/beer.interface';

@Pipe({
  name: 'ingredientPipe',
})
export class IngredientsPipe implements PipeTransform {
  transform(value: { [type: string]: Array<BeerIngredients> }, ...args: any[]) {
    const preText = 'Ingredients:';
    if (value && Object.keys(value).length) {
      return `${preText} ${Object.keys(value).join(', ')}`;
    }

    return `${preText}  Top Secret!`;
  }
}
