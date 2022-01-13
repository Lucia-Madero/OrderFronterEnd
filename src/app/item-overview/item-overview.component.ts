import {Component, OnInit} from '@angular/core';
import {ItemServiceService} from "../service/item-service.service";
import {Item} from "../model/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[] = [];
  searchText?: string;


  constructor(private itemService: ItemServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  viewItem(item: Item): void {
    this.router.navigate(['items/' + item.id]);
  }

}
