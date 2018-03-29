import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class ShoppingListService {
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Glasses of yogurt', 3),
    new Ingredient('Glasses of flour', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
