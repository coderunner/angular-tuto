import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComposantComponent } from "./demo1/composant/composant.component";
import { PersonsComponent } from "./demo2/persons/persons.component";
import { PersonComponent } from "./demo2/person/person.component";
import { ParentComponent } from "./demo3/parent/parent.component";
import { ChildComponent } from "./demo3/child/child.component";
import { AsyncComponent } from "./demo4/async/async.component";
import { TestInterceptor } from "./demo4/test.interceptor";
import { FilterComponent } from "./demo5/filter/filter.component";
import { PageComponent } from "./demo5/page/page.component";
import { DisplayComponent } from "./demo5/display/display.component";

@NgModule({
  declarations: [
    AppComponent,
    ComposantComponent,
    PersonsComponent,
    PersonComponent,
    ParentComponent,
    ChildComponent,
    AsyncComponent,
    FilterComponent,
    PageComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
