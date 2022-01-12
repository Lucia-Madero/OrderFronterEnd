import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from "../service/item-service.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[] = [];
  searchText?: string;


  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
