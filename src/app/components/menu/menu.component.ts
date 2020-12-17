import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : object[]=null;
  user:any;
  constructor(public accountService: AccountService, private router:Router) { 
    this.user =  accountService.userValue;
  }
   
  ngOnInit(): void {
    this.menu();  
  }
logout():void{
  this.accountService.logout();
  this.router.navigate(['/']);
}
menu():void{
  if(this.accountService.tokenValue){
    this.menus=this.user.accesos;
  }
}

}
