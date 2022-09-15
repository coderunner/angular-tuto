import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposantComponent } from './demo1/composant/composant.component';
import { PersonsComponent } from './demo2/persons/persons.component';
import { ParentComponent } from './demo3/parent/parent.component';

const routes: Routes = [
  { path: 'demo1', component: ComposantComponent },
  { path: 'demo2', component: PersonsComponent },
  { path: 'demo3', component: ParentComponent },
  { path: '**', component: ComposantComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
