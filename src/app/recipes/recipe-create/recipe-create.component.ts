import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../services/recipes.service';
import {Recipes} from '../../models/recipes.models';
import {Router} from '@angular/router';

@Component({
  selector: 'jaya-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  constructor(private recipeService: RecipesService,  private router: Router) {
  }

  recipe: Recipes = {
    id: '',
    name: '',
    description: '',
    image: '',
  };

  ngOnInit() {
  }

  createRecipe() {
    console.log(this.recipe);
    this.recipeService.createRecipe(this.recipe).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
