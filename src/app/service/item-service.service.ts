import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../model/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private readonly itemsUrl: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private httpClient: HttpClient) {
    this.itemsUrl = `${environment.backendUrl}/items`

  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl);
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  findById(id: string): Observable<Item> {
    return this.httpClient.get<Item>(this.itemsUrl+ '/' + id);
  }
}
