import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private usuario: Usuario;
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.token = sessionStorage.getItem('token');
    this.usuario = JSON.parse(sessionStorage.getItem('user')) as Usuario;
  }
  
  public get tokenValue(): any{
    if (this.token) {
      return this.token
    }
    return null;
  }
  public get userValue(): any{
    if (this.usuario) {
      return this.usuario;
    }
    return null;
  }
  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }
  login(usuario: string, clave: string): Observable<any> {
    const loginEndpoint = `${environment.API_Url}/oauth/token`;
    const credenciales = btoa('esteban' + ':' + '123456');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Basic ' + credenciales});

      let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username',usuario);
      params.set('password',clave);

    return this.http.post(loginEndpoint, params.toString(), {headers: httpHeaders});
  }
  guadarToken(accesToken: string):void{
    this.token = accesToken;
    sessionStorage.setItem('token',this.token);
  }
  obtenerDatosToken(accessToken:string):any{
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }
  guardarUser(accesToken: string):void{
    let payload = this.obtenerDatosToken(accesToken);
    this.usuario = new Usuario(); 
    this.usuario.id_usuario = payload.iduser;
    this.usuario.username = payload.nombre;
    this.usuario.rol = payload.authorities;
    this.usuario.accesos = payload.accesos;  
    sessionStorage.setItem('user',JSON.stringify(this.usuario));
  }
}
