import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {FormArray, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  recipeForm: FormGroup;

  editMode = false;

  constructor(
     private activatedRouteService: ActivatedRoute,
     private recipeService: RecipeService
  ) { }

  ngOnInit(): void {

    this.activatedRouteService.params.subscribe( (params: Params) => {
      this.id = +params.id;
      this.editMode = params.id !== null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push({
            new FormGroup({
              'name':
            })
          })
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription)
    });

  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
