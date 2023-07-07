import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router : Router) {

  }
  enviar( f:NgForm){
    console.log('login', f.form.value.login);
    console.log('contrasena', f.form.value.contrasena);


    
    let url_login = 'http://localhost:8000/api/usuarios/login';
    this.http.post(url_login, {
        'correo' :  f.form.value.login,
        'contraseña' :  f.form.value.contrasena
    }).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      if(data === 0){
        alert("El usuario y/o contraseña no existe");
      } else{
        this.router.navigateByUrl('/listado')
      }
    }

    )
  }
}
