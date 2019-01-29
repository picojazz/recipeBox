import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
	recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe:Recipe){
  	this.recipe = recipe;
    console.log('recipe  component'+recipe.name)
  }
}
