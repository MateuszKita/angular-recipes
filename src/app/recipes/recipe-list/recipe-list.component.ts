import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'Tasty pancakes',
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Blueberry_pancakes_%281%29.jpg'
    ),
    new Recipe(
      'Donuts',
      'Tasty donuts',
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Donuts.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeCliked(recipe: Recipe) {
    this.recipeWasClicked.emit(recipe);
  }
}
