//las variables en ts son implicitas, es decir, detecta el tipo de dato segun el dato almacenado
//otra forma de declarar (explicito) -> let apellido:string;
//let limita el alcance de la variable unicamente al bloque o expresion donde se use
//mientras que var declara las variables con alcance global o local
var nombre = 'Oscar'; //implicito
var apellido = 'Ardón'; //explicito
var edad = 22;
console.log(nombre, apellido, edad);
//para transpilar el archivo ts se usa "tsc nombre_archivo" y genera un archivo .js
//para correr el archivo js se usa node archivo.js
var item = {
    id: 5,
    title: 'pendiente',
    likes: 10
};
item['title'] = 'todo';
//si el tipo de dato de la var maybe es boolean, entonces solo aceptara boolean
if (maybe === true) {
    var aBoolean = maybe;
}
//si el tipo de dato de mmaybe es string, entonces solo aceptara strings
if (typeof maybe === 'string') {
    var aString = maybe;
}
//void
//funcion marcada como tipo void debido a que no retorna ningun valor
//al asignar tipo void a una variable, esta soolo puede aceptar 'undefined' o 'null'
function warnUser() {
    console.log('Be very careful ._.!!');
}
//Otra forma de hacer una funcion const saludo = () =>{}
//Arreglos
var items = [1, 2, 3, 4, 5];
var nombres = ['Oscar', 'Ardón'];
var edades = [19, 24, 19, 23];
//tuplas (combinacion de tipos de datos)
var tupla = ['Oscar', 22];
var tupla2 = ['Oscar', 22, true, 22]; //no importa el orden del tipo de datos
var tupla3 = ['Oscar', 22, true]; //importa el orden de los tipos d datos
var arrTupla = [
    [10, false],
    [34, true],
    [23, false]
];
//OBJETOS
//ejemplo de un objeto
var user = {
    //atributos
    nombre: 'Oscar',
    edad: 28
};
console.log(user.nombre);
//funcion que recibe como parametro un objeto
function PrintCoord(punto) {
    console.log("Coordenadas: (" + punto.x + "," + punto.y + ")");
}
//creando objeto
var p = { x: 10, y: 20 };
//llamando funcion y pasando parametro
PrintCoord(p);
