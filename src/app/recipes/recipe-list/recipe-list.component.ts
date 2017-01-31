import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[];
  @Output() recipeSelectedEmitter = new EventEmitter<Recipe>();
  recipe = new Recipe('ufuk', 'ufuk', 'https://www.petpatiler.com/wp-content/uploads/2016/09/scottish-fold-rocco-1-300x225.jpg');

  constructor() { }

  onSelected(recipe:Recipe)
  {
    this.recipeSelectedEmitter.emit(recipe);
  }

  ngOnInit() {
  }

}
