import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service'
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  ingredientEdit: IngredientModel;

  editMode = false;
  indexIngredient: number;
  constructor(
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.subscription =  this.slService.startingEddit.subscribe(
      (index: number) => {
        this.indexIngredient = index;
        this.editMode = true;
        this.ingredientEdit = this.slService.getIngredient(this.indexIngredient);
        this.slForm.setValue({name: this.ingredientEdit.name, amount: this.ingredientEdit.amount});
      }
    );
  }

  onAddItem() {
    const value = this.slForm.value;
    const ingName = value.name;
    const ingAmount = value.amount;
    const newIngredient = new IngredientModel(ingName, ingAmount);
    if (this.editMode) {
      this.slService.updateIngredient(this.indexIngredient, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDelete() {
    this.slService.deleteIngredient(this.indexIngredient);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
}
