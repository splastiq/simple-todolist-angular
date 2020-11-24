import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form;
  constructor(
    public dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ""
    });
  }

  test() {
    console.log("test");
  }

  addItem() {
    if (this.form.value.title.trim().length === 0) {
      this.form.reset();
      return;
    }
    this.dataService.addItem(this.form.value.title.trim());
    this.form.reset();
  }

  doneEdit(item) {
    this.dataService.doneEdit(item);
  }

  editItem(item) {
    this.dataService.editItem(item);
  }

  deleteItem(id) {
    this.dataService.deleteItem(id);
  }
}
