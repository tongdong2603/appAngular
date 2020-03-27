import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<IngredientModel[]>()
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomatoes', 10)
  ];
  constructor() {}
  getIngredients() {
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: IngredientModel[]) {
    console.log(...ingredients)
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
