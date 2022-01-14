import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemServiceService} from "../service/item-service.service";
import {Item} from "../model/item";
import {AlertMessageService} from "../service/alert-message.service";
import {Router} from "@angular/router";
import {AlertMessageType} from "../model/alertTemplate";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(1)]],
      amountOfStock: ['', [Validators.required, Validators.min(1)]],
    }
  )

  descriptionMaxLength: number = 255;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemServiceService,
    private alertMessageService: AlertMessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get name(): FormControl{
    return this.itemForm.get('name') as FormControl;
  }

  get description(): FormControl{
    return this.itemForm.get('description') as FormControl;
  }

  get price(): FormControl{
    return this.itemForm.get('price') as FormControl;
  }

  get amountOfStock(): FormControl{
    return this.itemForm.get('amountOfStock') as FormControl;
  }

  onSubmit() {
    const item: Item =  this.itemForm.value as Item;
    this.itemService.addItem(item).subscribe({
      next: () => {
        this.alertMessageService.publish({
          title: 'Created a new item',
          description: `Created ${item.name}`,
          type: AlertMessageType.SUCCESS
        });
        this.router.navigate(['items/:id']);
      },
      error: (error) => {
        this.alertMessageService.publish({
          title: `Could not create new item ${item.name}`,
          description: error.error.message,
          type: AlertMessageType.DANGER
        });
        this.itemForm.enable();
      }
    });
    this.itemForm.reset();

  }
}
