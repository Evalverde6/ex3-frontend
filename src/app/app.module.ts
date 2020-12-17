import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { LisventasComponent } from './components/lisventas/lisventas.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    LisventasComponent,
    MenuComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
