import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './interceptors/auth.guard';
import { LisventasComponent } from './components/lisventas/lisventas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', component: AppComponent, canActivate: [AuthGuard]},
{path: 'listar', component: LisventasComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
