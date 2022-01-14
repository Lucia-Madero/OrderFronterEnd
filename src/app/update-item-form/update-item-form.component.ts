import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-item-form',
  templateUrl: './update-item-form.component.html',
  styleUrls: ['./update-item-form.component.css']
})
export class UpdateItemFormComponent implements OnInit {

  updateItemForm: FormGroup = this.formBuilder.group(
    {
      name: [''],
      description: [''],
      price: [''],
      amountOfStock: ['']
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get name(): FormControl{
    return this.updateItemForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.updateItemForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.updateItemForm.get('price') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.updateItemForm.get('amountOfStock') as FormControl;
  }

}
