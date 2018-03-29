import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeBookService } from '../shared/recipe-book.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeBookService]
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
