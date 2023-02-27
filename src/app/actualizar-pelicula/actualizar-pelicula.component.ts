import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../peliculas';
import { ActivatedRoute,Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './actualizar-pelicula.component.html',
  styleUrls: ['./actualizar-pelicula.component.css']
})
export class ActualizarPeliculaComponent implements OnInit {

  id_peliculas: number;
  peliculas: Peliculas = new Peliculas();

  constructor(private peliculaServicio:PeliculasService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id_peliculas = this.route.snapshot.params['id_peliculas'];
    this.peliculaServicio.obtenerPeliculaPorId(this.id_peliculas).subscribe(dato => {
      this.peliculas = dato;
    }, error => console.log(error))
  }

  irAlistaPeliculas(){
    this.router.navigate(['/peliculas']);
    swal('Pelicula actualizada',`La pelicula ${this.peliculas.titulo} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.peliculaServicio.actualizarPelicula(this.id_peliculas,this.peliculas).subscribe(dato =>{
      this.irAlistaPeliculas();
    }, error => console.log(error));
  }


}
