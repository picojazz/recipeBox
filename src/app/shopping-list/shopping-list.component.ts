import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('tigedege', 5),
    new Ingredient('potatoes',6)
  ]

  constructor() { }

  ngOnInit() {
  }
  onRecupIngredient(ingredient:Ingredient){
    console.log(ingredient.amount)
    this.ingredients.push(ingredient)
  }
}
