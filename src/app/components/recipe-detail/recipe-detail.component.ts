import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRouteService: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteService.params.subscribe( (params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }
  onAddToShopList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
