import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemServiceService} from "../service/item-service.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  addItemForm = this.formBuilder.group(
    {
      name: '',
      description: '',
      price: '',
      amountOfStock: '',
      stockUrgency: ''
    }
  )

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemService.addItem(this.addItemForm.getRawValue().subscribe());
    this.addItemForm.reset();
  }
}
