import { RecipeBookService } from './../shared/recipe-book.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
