import { RecipeBookService } from '../../../shared/recipe-book.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {}

  onRecipeCliked() {
    this.recipeBookService.recipeSelected.emit(this.recipe);
  }
}
