import {Component} from '@angular/core';
import {AlertMessageService} from "../../service/alert-message.service";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {

  alertMessages$ = this.alertMessageService.messages();

  constructor(private alertMessageService: AlertMessageService) { }

}
