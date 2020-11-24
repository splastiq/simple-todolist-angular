import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";

class Item {
  title: string;
  done: boolean;
  id: string;
  edit: boolean;
  constructor(title: string) {
    (this.title = title),
      (this.done = false),
      (this.id = uuid()),
      (this.edit = false);
  }
}

@Injectable()
export class DataService {
  state = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : [];

  private items = this.state;

  get getItems() {
    return this.items;
  }

  addItem(item): void {
    this.items.push(new Item(item));
    this.save();
  }

  deleteItem(id): void {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
  }

  deleteCompleted() {
    this.items = this.items.filter(item => item.done === false);
    this.save();
  }

  editItem(item): void {
    item.edit = true;
    this.save();
  }

  doneEdit(item) {
    item.edit = false;
    this.save();
  }

  completeItem(item) {
    item.done = !item.done;
    this.save();
  }

  save(): void {
    localStorage.setItem("state", JSON.stringify(this.items));
    console.log(JSON.parse(localStorage.getItem("state")));
  }
}
