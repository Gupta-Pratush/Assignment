import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { PersonFormComponent } from "./components/person-form/person-form.component";

const routes: Routes = [
  { path: "", component: PersonListComponent },
  { path: "person/new", component: PersonFormComponent },
  { path: "person/edit/:id", component: PersonFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
