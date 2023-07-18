import { MovimientosInterface } from "./movimientos.interface"

export interface EmpleadoInterface {
    nombre: string
    apellido: string
    edad: number
    numeroCuenta: string
    cargoEmpleado: string 
    movimientos: MovimientosInterface[]
    saldoActual: number
}
