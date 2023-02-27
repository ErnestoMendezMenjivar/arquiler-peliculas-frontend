import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-registrar-peliculas',
  templateUrl: './registrar-peliculas.component.html',
  styleUrls: ['./registrar-peliculas.component.css']
})
export class RegistrarPeliculasComponent implements OnInit {

  pelicula : Peliculas = new Peliculas();

  //titulo: any; // <-- define el tipo de la variable tituloControl

  constructor(private peliculaServicio:PeliculasService, private router:Router) { }

  ngOnInit(): void {

   

  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if(file){
  //     this.pelicula.imagenFile = file;
  //   }
  // }

  guardarPelicula(){
    this.peliculaServicio.registrarPelicula(this.pelicula).subscribe(dato => {
      console.log(dato);
      this.listaPeliculas();
    },
    error => console.log(error));
  }

  listaPeliculas(){
    this.router.navigate(['/peliculas']);
    swal('Pelicula registrada',`La pelicula ${this.pelicula.titulo} ha sido registrada con exito`,`success`);
  }

  onSubmit(){
    this.guardarPelicula();
    console.log(this.pelicula);
  }



}
