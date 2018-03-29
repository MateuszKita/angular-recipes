import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeBookService {
  constructor() {}

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
