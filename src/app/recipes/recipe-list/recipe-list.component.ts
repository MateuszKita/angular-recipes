import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'Tasty pancakes',
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Blueberry_pancakes_%281%29.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
