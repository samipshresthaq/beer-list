import { Pipe, PipeTransform } from '@angular/core';

import { BeerIngredients } from '../models/beer.interface';

@Pipe({
  name: 'ingredientPipe',
})
export class IngredientsPipe implements PipeTransform {
  transform(value: { [type: string]: Array<BeerIngredients> }, ...args: any[]) {
    return `Ingredients: ${Object.keys(value).join(', ')}`;
  }
}
