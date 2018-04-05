import { RecipeBookService } from './../../shared/recipe-book.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeBookService: RecipeBookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeBookService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeBookService.addIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
}
