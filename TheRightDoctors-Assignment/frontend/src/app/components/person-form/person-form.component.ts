import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-person-form",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.css"],
})
export class PersonFormComponent implements OnInit {
  person = {
    name: "",
    age: "",
    gender: "",
    mobile: "",
  };
  isEdit = false;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.personService.getPerson(id).subscribe((data) => {
        this.person = data;
      });
    }
  }

  savePerson(): void {
    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get("id");
      this.personService.updatePerson(id!, this.person).subscribe(() => {
        this.router.navigate(["/"]);
      });
    } else {
      this.personService.createPerson(this.person).subscribe(() => {
        this.router.navigate(["/"]);
      });
    }
  }
}
