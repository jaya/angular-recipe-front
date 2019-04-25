import {Injectable} from '@angular/core';
import {Recipes} from '../models/recipes.models';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {
  }

  private url = 'https://jaya-recipes-api.herokuapp.com/recipes';

  createRecipe(recipe: Recipes) {
    return this.http.post<Recipes>(this.url, recipe);
  }

  listAllRecipes() {
    return this.http
      .get<Recipes[]>(this.url);
  }

  deleteRecipe(id: string) {
    return this.http.delete(`${this.url}/${id}`).subscribe();
  }
}
