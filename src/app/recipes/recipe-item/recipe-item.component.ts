import {Component, Input, OnInit} from '@angular/core';
import {Recipes} from '../../models/recipes.models';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'jaya-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipes;

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
  }

  deleteRecipe(id: string) {
    this.recipeService.deleteRecipe(id);
  }
}
