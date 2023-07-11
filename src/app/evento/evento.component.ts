import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {
  public eventos : any = {
    nombre : '',
    descripcion : '',
    fecha : '',
    hora : '',
    direccion : '',
    referencia : '',
    organizador : '',
    requisitos : '',
    motivo : '',
    costo_total : '',
  }

  constructor(private http: HttpClient, private route : ActivatedRoute) {

    let id = this.route.snapshot.params['id'];
    console.log(id)

    let url_eventos = 'http://localhost:8000/api/eventos/detalle/'+id;
    this.http.get(url_eventos).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      this.eventos = data
    }

    )
  }
}
