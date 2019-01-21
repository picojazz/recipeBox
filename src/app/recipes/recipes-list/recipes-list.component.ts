import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('mafe','a senegalese food','https://image.afcdn.com/recipe/20160226/13818_w420h344c1cx300cy225.jpg'),
    new Recipe('mafe2','a senegalese food','https://image.afcdn.com/recipe/20160226/13818_w420h344c1cx300cy225.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
