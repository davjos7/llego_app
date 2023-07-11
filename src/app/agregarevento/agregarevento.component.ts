import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregarevento',
  templateUrl: './agregarevento.component.html',
  styleUrls: ['./agregarevento.component.scss']
})
export class AgregareventoComponent {
  constructor(private http: HttpClient, private router : Router) {
    
  }
  enviar( f:NgForm){
    //validamos que los campos lleguen
    console.log('nombre', f.form.value.nombre);
    console.log('descripcion', f.form.value.descripcion);
    console.log('fecha', f.form.value.fecha);
    console.log('hora', f.form.value.hora);
    console.log('direccion', f.form.value.direccion);
    console.log('referencia', f.form.value.referencia);
    console.log('organizador', f.form.value.organizador);
    console.log('requisitos', f.form.value.requisitos);
    console.log('motivo', f.form.value.motivo);
    console.log('costototal', f.form.value.costototal);

    //return; // para que la funcion acabe ahi
  
    
    let url_registro = 'http://localhost:8000/api/eventos/registrar';
    this.http.post(url_registro, {
        'nombre' :  f.form.value.nombre,
        'descripcion' :  f.form.value.descripcion,
        'fecha' :  f.form.value.fecha,
        'hora' :  f.form.value.hora,
        'direccion' : f.form.value.direccion,
        'referencia' : f.form.value.referencia,
        'organizador' : f.form.value.organizador,
        'requisitos' : f.form.value.requisitos,
        'motivo' : f.form.value.motivo,
        'costo_total' : f.form.value.costo_total

    }).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      alert("Se registro correctamente");
      this.router.navigateByUrl('/')
    }
  
    )
  }

}
