
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private http: HttpClient, private router : Router) {
    
  }
  enviar( f:NgForm){
    //validamos que los campos lleguen
    console.log('nombre', f.form.value.nombre);
    console.log('apellido', f.form.value.apellido);
    console.log('correo', f.form.value.correo);
    console.log('contrasena', f.form.value.contrasena);
    console.log('fecha_nacimiento', f.form.value.fecha_nacimiento);
    console.log('telefono', f.form.value.telefono);
    console.log('plata', f.form.value.plata);
    console.log('ciudad', f.form.value.ciudad);
    console.log('yape', f.form.value.yape);
    console.log('plin', f.form.value.plin);
    console.log('genero', f.form.value.genero);

    //return; // para que la funcion acabe ahi
  
    
    let url_registro = 'http://localhost:8000/api/usuarios/registrar';
    this.http.post(url_registro, {
        'nombre' :  f.form.value.nombre,
        'apellido' :  f.form.value.apellido,
        'correo' :  f.form.value.correo,
        'contraseña' :  f.form.value.contrasena,
        'fecha_nacimiento' : f.form.value.fecha_nacimiento,
        'telefono' : f.form.value.telefono,
        'plata' : f.form.value.plata,
        'ciudad' : f.form.value.ciudad,
        'yape' : f.form.value.yape,
        'plin' : f.form.value.plin,
        'genero' : f.form.value.genero,

    }).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      alert("Se registro correctamente");
      this.router.navigateByUrl('/')
    }
  
    )
  }
}
