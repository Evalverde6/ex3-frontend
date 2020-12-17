import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exa3-frontend-esteban-valverde';
  token: string;
  constructor (
    private accountService: AccountService
  ) {
    this.token = accountService.tokenValue;
  }
}
