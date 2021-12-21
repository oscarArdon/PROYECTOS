export interface Cita {
    id?:number;
    id_cliente:number;
    nombre_mascota:string;
    fecha_cita:string;
    hora:string;
    tipo_cita:string;
    especificaciones:string;
    estado: string;
    id_empleado: number;
    id_formulario: number;
    created_at?:string;
    updated_at?:string;
}