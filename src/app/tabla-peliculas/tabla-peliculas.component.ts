import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../peliculas';
//import { environment } from 'src/environments/environment';
import 'datatables.net';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  peliculas: Peliculas[];

  //imagenBaseURL = environment.imagenBaseURL;


  constructor(private peliculaService: PeliculasService, private router:Router) {}

  ngOnInit(): void {


    this.obtenerdatosPeliculas();
  }


  //metodo para obtener la informacion por el id
  actualizarPelicula(id_peliculas: number){
    this.router.navigate(['actualizar-pelicula',id_peliculas]);
  }

  private obtenerdatosPeliculas() {
    this.peliculaService.obtenerListaPeliculas().subscribe(dato => {
      console.log(dato);
      this.peliculas = dato;
    });
  }

  eliminarPelicula(id_pelicula: number){

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la pelicula",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.peliculaService.eliminarPelicula(id_pelicula).subscribe(dato =>{
          console.log(dato);
          this.obtenerdatosPeliculas();
          swal(
            'Pelicula eliminada',
            'La pelicula ha sido eliminada con exito',
            'success'
          )
        })

      }
    })
  }

  verDetallesPeliculas(id_pelicula: number){
    this.router.navigate(['peliculas-detalles',id_pelicula]);
  }







}
