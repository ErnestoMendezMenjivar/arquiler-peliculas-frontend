import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    nombre_completo : '',
    correo : '',
    username : '',
    contrasena : ''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  forSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null ) {
      alert('el nombre de usuario es requerido')
    }

    this.userService.registrarUsuario(this.user).subscribe( (dato) =>{
      console.log(dato);
      alert("usuario guardado con exito!!");
    }, (error) => {
      console.log(error);
      alert('ha ocurrido un error en el sistema!!');
    });

  }

}
