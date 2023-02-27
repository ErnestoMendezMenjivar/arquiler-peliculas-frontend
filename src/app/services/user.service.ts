import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  //para registrar usuarios
  public registrarUsuario(user:any){
    return this.httpClient.post(`${baseurl}/usuarios/`,user);
  }


}
