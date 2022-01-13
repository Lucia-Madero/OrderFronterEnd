import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AlertMessage} from "../model/alertTemplate";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private messages$$ = new Subject<AlertMessage>();

  publish(alertMessage: AlertMessage) {
    this.messages$$.next(alertMessage);
  }

  messages(): Observable<AlertMessage> {
    return this.messages$$.asObservable();
  }
}
