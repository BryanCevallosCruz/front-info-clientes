import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespuestaClienteComponent } from './respuesta-cliente/respuesta-cliente.component';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit{
  
  codigo!: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  buscarCliente(){
    console.log(this.codigo);
    this.dialog.open(RespuestaClienteComponent,{
      width:'600px',
      data: {codigo: this.codigo}
    });
  }

}
