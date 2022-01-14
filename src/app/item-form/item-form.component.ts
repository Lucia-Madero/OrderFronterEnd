import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ItemServiceService} from "../service/item-service.service";
import {Item} from "../model/item";
import {AlertMessageService} from "../service/alert-message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(1)]],
      amountOfStock: ['', [Validators.required, Validators.min(1)]]
    }
  )
  item !: Item;
  itemId?: string;
  isAddMode?: boolean;
  loading = false;
  submitted = false;

  descriptionMaxLength: number = 255;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemServiceService,
    private alertMessageService: AlertMessageService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['id'];
    this.isAddMode = !this.itemId;

    if (!this.isAddMode) {
      this.itemService.findById(this.itemId!)
        .pipe(first())
        .subscribe(x => this.itemForm?.patchValue(x));
    }
  }

  get id(): FormControl {
    return this.itemForm!.get('id') as FormControl;
  }

  get name(): FormControl {
    return this.itemForm!.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.itemForm!.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.itemForm!.get('price') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.itemForm!.get('amountOfStock') as FormControl;
  }

  onSubmit() {

    if (this.isAddMode) {
      this.createItem();
    } else {
      this.updateItem();
    }

  }

  createItem(): void {
    this.itemService.addItem(this.itemForm.value).subscribe();
    this.router.navigate(['items']);

  }

  updateItem(): void {
    this.itemService.updateItem(this.itemId!, this.itemForm.value).subscribe();

  }

}
