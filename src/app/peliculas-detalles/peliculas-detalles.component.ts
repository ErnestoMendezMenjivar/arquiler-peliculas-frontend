import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas-detalles',
  templateUrl: './peliculas-detalles.component.html',
  styleUrls: ['./peliculas-detalles.component.css']
})
export class PeliculasDetallesComponent implements OnInit {

  id_peliculas: number;
  peliculas: Peliculas;

  constructor(private route:ActivatedRoute,private peliculaServicio:PeliculasService) { }

  ngOnInit(): void {
    this.id_peliculas = this.route.snapshot.params['id_peliculas'];
    this.peliculas = new Peliculas();
    this.peliculaServicio.obtenerPeliculaPorId(this.id_peliculas).subscribe(dato =>{
    this.peliculas = dato;
    swal(`Detalles de la pelicula ${this.peliculas.titulo}`);
    })
  }

}
