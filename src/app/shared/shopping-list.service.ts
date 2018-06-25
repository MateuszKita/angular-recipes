import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  public ingredientsChanged = new Subject<Ingredient[]>();
  public editingStarted = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Glasses of yogurt', 3),
    new Ingredient('Glasses of flour', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
  }
}
