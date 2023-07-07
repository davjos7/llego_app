import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // sirve para que tu angular se conecte via api


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  public eventos : any;

  constructor(private http: HttpClient) {

    let url_eventos = 'http://localhost:8000/api/eventos/listar'
    this.http.get(url_eventos).subscribe( //subscribe es para traer lo que se obtuvo, el this es para llamar una funcion o una variable
    (data : any)=>{
      console.log(data)
      this.eventos = data
    }

    )
  }


}
