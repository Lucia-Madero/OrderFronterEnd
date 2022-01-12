import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private readonly title: string;

  constructor() {
    this.title = 'Order';
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title;
  }
}
