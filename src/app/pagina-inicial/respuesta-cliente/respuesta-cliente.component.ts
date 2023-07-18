import { Component, OnInit, Input, Inject} from '@angular/core';
import { ClienteInterface } from 'src/app/services/cliente.interface';
import { PersonaService } from 'src/app/services/persona.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-respuesta-cliente',
  templateUrl: './respuesta-cliente.component.html',
  styleUrls: ['./respuesta-cliente.component.css']
})
export class RespuestaClienteComponent implements OnInit  {

  @Input() codigo!: string;
  clientes!: ClienteInterface
  mostrar: boolean = false

  constructor(
    private readonly personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.codigo = data.codigo;
    this.getClientes(this.codigo)
  }

  ngOnInit(): void {
  }

  getClientes(codigo: string){
    if (this.clientes === undefined) {
      console.log('El elemento es nulo');
      this.mostrar=false
    }
    this.personaService.getClientebyCodigo(codigo)
    .subscribe(
      {
        next:(clientes)=>{
          this.clientes = clientes
          this.mostrar=true
        },
        error: (err) => {
          console.error(err)
        },
      }
    );
  }
}
