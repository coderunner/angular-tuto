import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantComponent } from './demo1/composant/composant.component';
import { PersonsComponent } from './demo2/persons/persons.component';
import { PersonComponent } from './demo2/person/person.component';
import { PersonsPageComponent } from './demo2/persons-page/persons-page.component';
import { ParentComponent } from './demo3/parent/parent.component';
import { ChildComponent } from './demo3/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantComponent,
    PersonsComponent,
    PersonComponent,
    PersonsPageComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
