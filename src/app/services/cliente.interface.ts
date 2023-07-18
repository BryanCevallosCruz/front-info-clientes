import { MovimientosInterface } from "./movimientos.interface"

export interface ClienteInterface {
    nombre: string
    apellido: string
    edad: number
    numeroCuenta: string
    fechaCreacionCuenta: string 
    movimientos: MovimientosInterface[]
    saldoActual: number
}
