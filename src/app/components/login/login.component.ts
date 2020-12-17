import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
  
  
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
  
    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          {
            next: res => {
                console.log(res);
                this.accountService.guardarUser(res.access_token);
                this.accountService.guadarToken(res.access_token);
                this.router.navigate(['/']); 
            },
            error: error => {
                console.log(error);
                this.loading = false;
            }
        });
      
      }
}
