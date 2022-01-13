import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemServiceService} from "../service/item-service.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  addItemForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      amountOfStock: [0, [Validators.required]],
    }
  )


  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item: Item =  this.addItemForm.value as Item;
    this.itemService.addItem(item).subscribe();
    this.addItemForm.reset();

  }
}
