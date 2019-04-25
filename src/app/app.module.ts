import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeItemComponent} from './recipes/recipe-item/recipe-item.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'create', component: RecipeCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
