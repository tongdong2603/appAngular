import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RecipesComponent } from '../app/components/recipes/recipes.component';
import { RecipeListComponent } from '../app/components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../app/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../app/components/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './components/header/header.component';
import {ShoppingListService} from './services/shopping-list.service';
import { DropdownDirective } from './services/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
