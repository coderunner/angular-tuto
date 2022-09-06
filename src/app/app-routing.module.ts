import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposantComponent } from './composant/composant.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: 'composant', component: ComposantComponent },
  { path: 'persons', component: PersonsComponent },
  { path: '**', component: ComposantComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
