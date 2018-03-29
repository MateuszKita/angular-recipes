import { RecipeBookService } from './../../shared/recipe-book.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.recipeBookService.addIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
}
