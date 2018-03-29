import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'Tasty pancakes',
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Blueberry_pancakes_%281%29.jpg',
      [new Ingredient('Milk', 1), new Ingredient('Flour', 2)]
    ),
    new Recipe(
      'Donuts',
      'Tasty donuts',
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Donuts.jpg',
      [new Ingredient('Jam', 2), new Ingredient('Oil', 3)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
