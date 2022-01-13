import {Component, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {ItemServiceService} from "../service/item-service.service";
import {catchError, Observable, throwError} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  // @Input() item?: Item;
  selectedItem$!: Observable<Item>;

  constructor( private itemService: ItemServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.displayItemDetails();
  }

  selectItem(id: string): void {
    this.selectedItem$ = this.itemService.findById(id)
      .pipe(
        catchError(err => {
          this.router.navigate(['items']);
          return throwError(err);})
      );
  }

  displayItemDetails(): void {
    this.activatedRoute.params.subscribe(
      params => {this.selectItem(params['id'])}
    );
  }


}
