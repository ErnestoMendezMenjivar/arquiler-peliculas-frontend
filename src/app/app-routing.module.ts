import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPeliculaComponent } from './actualizar-pelicula/actualizar-pelicula.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PeliculasDetallesComponent } from './peliculas-detalles/peliculas-detalles.component';
import { RegistrarPeliculasComponent } from './registrar-peliculas/registrar-peliculas.component';
import { TablaPeliculasComponent } from './tabla-peliculas/tabla-peliculas.component';

const routes: Routes = [
  {path : 'peliculas',component:ListaPeliculasComponent },
  {path : '',redirectTo:'peliculas',pathMatch:'full'},
  {path : 'tabla-peliculas', component : TablaPeliculasComponent},
  {path : 'registrar-peliculas', component : RegistrarPeliculasComponent},
  {path : 'actualizar-pelicula/:id_peliculas',component : ActualizarPeliculaComponent},
  {path : 'peliculas-detalles/:id_peliculas', component  : PeliculasDetallesComponent},
  {path : 'signup', component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
