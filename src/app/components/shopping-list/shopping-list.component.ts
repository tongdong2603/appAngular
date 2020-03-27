import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { IngredientModel} from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }
  onIngredientAdded(ingredient: IngredientModel) {
    this.shoppingListService.onIngredientAdded(ingredient);
  }
}
