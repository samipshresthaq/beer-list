import { FormControl } from '@angular/forms';

export interface BeerInterface {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: { [type: string]: Array<BeerIngredients> };
}

export interface BeerIngredients {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface BeerForm {
  name: FormControl<string>;
  tagline: FormControl<string>;
  description: FormControl<string>;
  image_url: FormControl<string>;
}
