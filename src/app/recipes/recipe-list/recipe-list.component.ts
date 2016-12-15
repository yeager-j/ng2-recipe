import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy recipe', 'http://placehold.it/100x100');

  constructor() { }

  ngOnInit() {
  }

}
