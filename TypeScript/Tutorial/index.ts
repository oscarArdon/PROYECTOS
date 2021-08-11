//las variables en ts son implicitas, es decir, detecta el tipo de dato segun el dato almacenado
//otra forma de declarar (explicito) -> let apellido:string;
//let limita el alcance de la variable unicamente al bloque o expresion donde se use
//mientras que var declara las variables con alcance global o local
let nombre = 'Oscar';//implicito
let apellido:string = 'Ardón';//explicito
let edad:number = 22;

console.log(nombre,apellido,edad);
//para transpilar el archivo ts se usa "tsc nombre_archivo" y genera un archivo .js
//para correr el archivo js se usa node archivo.js
const item = {
    id:5,
    title:'pendiente',
    likes: 10
};
item['title']='todo';

//Unknow
//declarando una variable unknown, esta puede almacenar cualquier tipo de dato
declare const maybe:unknown;
//si el tipo de dato de la var maybe es boolean, entonces solo aceptara boolean
if(maybe === true){
    const aBoolean:boolean = maybe;
}
//si el tipo de dato de mmaybe es string, entonces solo aceptara strings
if(typeof maybe === 'string'){
    const aString:string = maybe;
}

//void
//funcion marcada como tipo void debido a que no retorna ningun valor
//al asignar tipo void a una variable, esta soolo puede aceptar 'undefined' o 'null'
function warnUser():void{
    console.log('Be very careful ._.!!')
}

//Otra forma de hacer una funcion const saludo = () =>{}

//Arreglos
const items = [1,2,3,4,5];
const nombres:string[] = ['Oscar','Ardón'];
const edades:Array<number> = [19,24,19,23];

//tuplas (combinacion de tipos de datos)
const tupla = ['Oscar',22];
const tupla2:(string|number|boolean)[] = ['Oscar',22,true,22];//no importa el orden del tipo de datos
const tupla3:[string,number,boolean] = ['Oscar',22,true];//importa el orden de los tipos d datos
const arrTupla:[number,boolean][]=[ //tupla de arreglos donde importa el orden de los tipos
    [10,false],
    [34,true],
    [23,false]
];

//OBJETOS
//ejemplo de un objeto
const user = {
    //atributos
    nombre: 'Oscar',
    edad: 28
};
console.log(user.nombre);

//funcion que recibe como parametro un objeto
//para crear parametros opcionales se hace: y?:number
function PrintCoord(punto:{x:number,y:number}){
    console.log(`Coordenadas: (${punto.x},${punto.y})`);
}
//creando objeto
const p = {x:10, y:20};
//llamando funcion y pasando parametro
PrintCoord(p);

//creando un objeto y declarando el tipo de dato de sus atributos
const tweet:{username:string, text:string, mediaUrl:string} = {
    username: 'Oscar',
    text: 'Hola mundo tweet',
    mediaUrl:'http://www.olahace.com'
};
