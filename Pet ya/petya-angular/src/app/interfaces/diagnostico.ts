export interface Diagnostico {
    id?:number;
    cliente_id:number;
    nombre_mascota:string;
    especie:string;
    raza:string;
    edad:string;
    sexo:string;
    color:string;
    vacunacion:string;
    motivo:string;
    vacunas_realizadas:string;
    peso:string;
    pulso:string;
    temperatura:string;
    diagnostico_final: string;
    tratamiento: string;
    empleado_id:number;
    created_at?:string;
    updated_at?:string;
}