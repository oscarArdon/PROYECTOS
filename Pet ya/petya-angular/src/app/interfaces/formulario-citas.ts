export interface FormularioCita {
    id?:number;
    fecha_cita: string;
    hora:string;
    nombre_mascota:string;
    especie:string;
    raza:string;
    edad:string;
    sexo:string;
    color:string;
    vacunacion:string;
    motivo:string;
    vacunas_realizadas:string;
    id_empleado:number;
    peso:string;
    pulso:string;
    temperatura:string;
    cliente_id:number;
    created_at?:string;
    updated_at?:string;
}