import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Glasses of yogurt', 3),
    new Ingredient('Glasses of flour', 3)
  ];

  constructor() {}

  ngOnInit() {}
}
