import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeBookService {
  constructor(private shoppingListService: ShoppingListService) {}

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

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
