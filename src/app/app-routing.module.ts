import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposantComponent } from './demo1/composant/composant.component';
import { PersonsPageComponent } from './demo2/persons-page/persons-page.component';
import { ParentComponent } from './demo3/parent/parent.component';

const routes: Routes = [
  { path: 'demo1', component: ComposantComponent },
  { path: 'demo2', component: PersonsPageComponent },
  { path: 'demo3', component: ParentComponent },
  { path: '**', component: ComposantComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
