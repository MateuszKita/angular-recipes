import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeBookService } from '../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasClicked = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  onRecipeCliked(recipe: Recipe) {
    this.recipeWasClicked.emit(recipe);
  }
}
