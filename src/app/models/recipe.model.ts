import {IngredientModel} from '../models/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModel[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
