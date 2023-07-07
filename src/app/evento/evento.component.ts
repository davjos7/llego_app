import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {
  public eventos : any;

  constructor(private http: HttpClient, private route : ActivatedRoute) {

    let url_eventos = 'http://localhost:8000/api/eventos/detalle/2'
    this.http.get(url_eventos).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      this.eventos = data
    }

    )
  }
}
