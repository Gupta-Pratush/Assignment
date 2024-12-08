import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { PersonFormComponent } from "./components/person-form/person-form.component";

@NgModule({
  declarations: [
    AppComponent, // Main application component
    PersonListComponent, // Add PersonListComponent here
    PersonFormComponent, // Add PersonFormComponent here
  ],
  imports: [
    BrowserModule, // Required for browser applications
    AppRoutingModule, // Routing module
    FormsModule, // Required for two-way data binding (e.g., [(ngModel)])
    HttpClientModule, // For making HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
