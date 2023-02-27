import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  peliculas:Peliculas[];

  

  constructor(private peliculaServicio:PeliculasService) { }

  ngOnInit(): void {

    this.obtenerPeliculas();

  }

  private obtenerPeliculas(){

    this.peliculaServicio.obtenerListaPeliculas().subscribe(dato => {
      this.peliculas = dato;

    });

  }

}
