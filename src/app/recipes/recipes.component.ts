import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {Recipes} from '../models/recipes.models';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'jaya-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipesService) {
  }

  recipes$: Recipes[] = [];
  loaded: boolean;

  ngOnInit() {
    setInterval(() => {
      this.recipeService.listAllRecipes().subscribe(value => {
        if (value.length > this.recipes$.length || value.length < this.recipes$.length) {
          this.loaded = false;
          this.recipes$ = value;
        }
        this.loaded = true;
      });
    }, 5000);
  }

}

