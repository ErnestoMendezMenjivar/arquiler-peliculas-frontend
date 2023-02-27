import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peliculas } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  // Esta URL Obtiene el listado de todas las peliculas en el Backend
  private baseURL = "http://localhost:8083/api/v2/peliculas";

  constructor( private httpClient: HttpClient ) { }

  //este metodo sirve para obtener las peliculas
  obtenerListaPeliculas():Observable<Peliculas[]>{
  return this.httpClient.get<Peliculas[]>(`${this.baseURL}`);
  }


  //metodo para registrar la pelicula
  registrarPelicula(pelicula: Peliculas):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,pelicula)
  }

  //metodo para actualizar la pelicula
  actualizarPelicula(id_pelicula: number, peliculas:Peliculas): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id_pelicula}`,peliculas);
  }


  //metodo para obtener o buscar empleado
  obtenerPeliculaPorId(id_pelicula: number):Observable<Peliculas>{
    return this.httpClient.get<Peliculas>(`${this.baseURL}/${id_pelicula}`);
  }

  eliminarPelicula(id_pelicula: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id_pelicula}`);
  }

}
