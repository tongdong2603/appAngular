import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameEdit', {static: false}) nameEdit: ElementRef;
  @ViewChild('amountEdit', {static: false}) amountEdit: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameEdit.nativeElement.value;
    const ingAmount = this.amountEdit.nativeElement.value;
    const item = new IngredientModel(ingName, ingAmount);
    this.nameEdit.nativeElement.value = '';
    this.nameEdit.nativeElement.value = '';
    this.ingredientAdded.emit(item);
  }
}
