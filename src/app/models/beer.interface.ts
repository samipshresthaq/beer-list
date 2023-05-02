export interface BeerInterface {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients: { [type: string]: Array<Ingredients> };
}

interface Ingredients {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}
