import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"],
})
export class PersonListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }

  deletePerson(id: string): void {
    this.personService.deletePerson(id).subscribe(() => {
      this.loadPeople(); // Refresh list after deletion
    });
  }
}
