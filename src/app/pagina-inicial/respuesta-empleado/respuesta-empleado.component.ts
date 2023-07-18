import { Component, OnInit, Input, Inject} from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoInterface } from 'src/app/services/empleado.interface';


@Component({
  selector: 'app-respuesta-empleado',
  templateUrl: './respuesta-empleado.component.html',
  styleUrls: ['./respuesta-empleado.component.css']
})
export class RespuestaEmpleadoComponent {
  @Input() codigo!: string;
  empleado!: EmpleadoInterface
  mostrar: boolean = false

  constructor(
    private readonly personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.codigo = data.codigo;
    this.getEmpleado(this.codigo)
  }

  ngOnInit(): void {
  }

  getEmpleado(codigo: string){
    if (this.empleado === undefined) {
      console.log('El elemento es nulo');
      this.mostrar=false
    }
    this.personaService.getEmpleadoByCodigo(codigo)
    .subscribe(
      {
        next:(empleado)=>{
          this.empleado = empleado
          this.mostrar=true
        },
        error: (err) => {
          console.error(err)
        },
      }
    );
  }
}
