import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePokemonComponent } from './components/table-pokemon/table-pokemon.component';

const routes: Routes = [
  {path: 'home', component:TablePokemonComponent},
  {path: '', pathMatch:'full',redirectTo:'home'},
  {path: '**', pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
