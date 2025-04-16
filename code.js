//*---- VARIABLES

/* =====================================
=      Declaracion de Variables         =
===================================== */

/* let nombre
let apellido */



/* =====================================
=   Inicializacion de Variables        =
===================================== */

/* let nombre = "Leonel"
let apellido = "Villegas"
let edad = "27" */

// Un espacio que guardamos en memoria es lo que se escribe primer seguido de un igual y despues viene el contenido de la variable, se puede modificar o cambiar lo que hay dentro de la variable.

/* computadora = "para jugar"

alert(computadora) */

// La variable es "computadora" y lo que este dentro es la informacion que guarda la variable es decir "para jugar".


/* =====================================
=      Palabras reservadas             =
===================================== */

/*

break / case / catch / continue

default / let / delete / do / while / else / finally / if /

in / instanceof / new / return /switch / this / throw / try

typeof / var / void / while / with /

*/



/* =====================================
=         Tipos de datos                =
===================================== */


//*----- DATOS PRIMITIVOS -----

// STRING
/* const nombre = "Leonel";
console.log(nombre)
console.log(typeof nombre) // Para chequear el tipo de dato */


// NUMBER
/* const number = 27; */

// BOOLEAN
/* const boolean = true;
const boolean1= false; */

// NULL (Ausencia intencional de un valor.)
/* const vacio = null; */

// UNDEFINED (Representa una  variable no ha sido asignada o que no tiene un valor definido.) 

/* let myUndefined;
console.log(typeof myUndefined); */

// SYMBOL  (Representa un identificador único e inmutable que se puede utilizar como clave para propiedades de objetos.) 

// NaN  (Se utiliza para indicar que un valor no es un número válido según las reglas de aritmética de JavaScript.)

/* console.log(typeof myNAN); */

/* Aquí está el punto clave: aunque NaN significa Not-a-Number,
NaN es considerado un valor especial dentro del tipo de dato
number en JavaScript. es por eso que devuelve number */



//*------- DATOS COMPUESTOS ------

// OBJECT   ==> Representa una colección de propiedades y valores ,tienen propiedades y metodos

/* let objeto = {};
console.log(objeto);
console.log(typeof objeto);
*/



/* // ARRAY   ==> []  Se utiliza para almacenar y manipular una colección
ordenada de elementos. Un array puede contener cualquier
tipo de dato,los elementos se separan por comas.  */

/* let miArray = [];
console.log(miArray);
console.log(typeof miArray); */

/* El operador typeof en JavaScript está diseñado para devolver
 el tipo primitivo de un valor. */

/* En JavaScript, los arrays son un tipo especial de objeto. De hecho,
cualquier array es una instancia de la clase Array, pero sigue siendo
considerado un objeto en su naturaleza fundamental. */

/* Function ==> (){} Las funciones en JavaScript son objetos de
primera clase, lo que significa que se pueden asignar a
variables, pasar como argumentos a otras funciones,
devolver como valores de otras funciones y almacenar en estructuras de datos. */

/* const myFunction = () => {};
console.log(typeof myFunction); */

// Arroja function - un tipo especial de object



/* bigint ==>     Permite trabajar con números enteros de
cualquier tamaño sin pérdida de precisión. */

/* let bigint = 1231243253464362342341231232343253465345324n;
console.log(bigint) */



//*------ OPERADORES ------

/* =====================================
=        Operadores Aritméticos        =
===================================== */


// SUMA +
// RESTA -
// MULTIPLICACION *
// DIVISION /
// MODULO(RESTO DE LA DIVISION) %
// INCREMENTO ++
// DECREMENTO --





/* =====================================
=      Operaciones con cadenas         =
===================================== */

/* let palabra1 = "Yo soy";
let palabra2 = "Alumno de Coder";
let frase1 = "";

frase1 = palabra1 + palabra2; */

//Con el operador + puedo concatenar palabras(strings)

/*
### PROMPT()

La función prompt() en JavaScript es una función integrada
(built-in-function) que se utiliza para mostrar un cuadro de diálogo al
usuario y solicitarle que ingrese un valor. Es una función que se utiliza
principalmente en aplicaciones web para obtener la entrada del usuario
de manera interactiva. 

El cuadro de diálogo que se muestra mediante prompt() contiene un
campo de entrada de texto donde el usuario puede escribir su respuesta
y dos botones, "Aceptar" y "Cancelar". El usuario puede escribir un valor
en el campo de entrada y luego hacer clic en "Aceptar" para confirmar o en
"Cancelar" para cancelar la operación. 

*/

/* let nombre = prompt("Por favor ingresa tu nombre");
alert(nombre);

let nombre6 = prompt("Por favor ingresa tu nombre");
console.log(typeof nombre6);

let edad = prompt("Por favor ingresa tu edad");
console.log(edad);
 */

/**
 * Prompt() ==> siempre devuelve una cadena de texto (string), lo podemos
comprobar a través del operador typeof().

Para usar numeros necesitamos parsearlos es decir convertir la cadena a
numeros enteros o decimales respectivamente.
 * 
 */

/* =====================================
=           Sin parseInt()             =
===================================== */

/* let numeroF = prompt("Ingresa el primer numero ");
let numeroG = prompt("Ingresa el segundo numero ");

const operacion = numeroF + numeroG;
console.log(operacion); */

/* =====================================
=           Con parseInt()              =
===================================== */

/* let numeroH = prompt("Ingresa el primer numero ");
let numeroI = prompt("Ingresa el segundo numero ");

const resultadoOperacion = parseInt(numeroH) + parseInt(numeroI);
console.log(operacion);
 */


/* let dinero = prompt("ingrese su cantidad de dinero en total.")
let deuda = prompt("ingrese su deuda total.")

let resultado = dinero - deuda
alert(resultado) */


// FORMA DE CONCATENAR UN STRING

// PRIMERA FORMA
/* let palabra1 = "hola"
let palabra2 = "estudiantes" */

/* let saludo = palabra1 + palabra2 
console.log(saludo) */


// SEGUNDA FORMA
// PLANTILLAS LITERALES
/* console.log(`${palabra1} mis queridos ${palabra2}`) */

// PARSEINT 
// El "prompt" siempre devuelve una cadena de texto, inclusive los numeros, es decir que no se podria realizar una suma si se quisiera porque todo dato lo toma en forma de texto y para evitar eso se debe parsear y asi poder utilizar los numeros y que no se transformen en string.

/* let numero1 = parseInt(prompt("ingrese su numero"))
let numero2 = parseInt(prompt("ingrese su segundo numero"))

let resultado = numero1 + numero2 
console.log(resultado)
*/



/* =====================================
=       Operadores de Asignación        =
===================================== */

//Adición asignación +=

//Resta asignacion -=

//multiplicacion asignacion *=

//Divisón asignación /=

/* let x = 10; // Asignación básica (=)
x += 5; // Equivalente a: x = x + 5;
x -= 2; // Equivalente a: x = x - 2;
x *= 3; // Equivalente a: x = x * 3;
x /= 2; // Equivalente a: x = x / 2;

console.log(x); // Muestra el resultado final */

/* let x = 10

x += 5; // x = x + 5;
x -= 5; // x = x - 5;

*/



/* =====================================
=         Operadores Lógicos            =
===================================== */

// "&&" AND LOGICO
// "||" OR LOGICO
// "!" NOT

/* console.log(true && false)
console.log(true || false)
console.log(!true)

*/



/* =====================================
=         operadores Relacionales       =
===================================== */

//Igual a: ==

//No igual a: !=

//Estrictamente igual a: ===

//Estrictamente no igual a: !==

//Mayor que: >

//Menor que: <

//Mayor o igual que: >=

//Menor o igual que: <=

/* console.log(10 > 5); // true
console.log(3 < 1); // false
console.log(8 >= 8); // true
console.log(6 <= 4); // false
console.log(7 == 7); // true
console.log(5 != 5); // false */

/* =====================================
=        Operaciones Aritméticas       =
===================================== */

/* let numeroA = 10;
let numeroB = 20;
let numeroC = 60;

let resultadoDeLaSuma = numeroA + numeroB;
console.log(resultadoDeLaSuma);

let resultadoDeLaResta = numeroC - numeroA;
console.log(resultadoDeLaResta);

let resultadoDeMultiplicacion = numeroC * numeroB;
console.log(resultadoDeMultiplicacion);
*/


//*------ IF, ELSE IF y ELSE --------*//


/* =====================================
=   Estructura de control condicional   =
===================================== */

/* if (condicion) {
    // Bloque de código que se ejecuta si la condición es
    //verdadera es decir TRUE
} else {
    // Bloque de código que se ejecuta si la condición es
    //falsa es decir FALSE
}
   */

/* =====================================
=               Ejemplo 1               =
===================================== */

/* let numero = 10;

if (numero > 0) {
    console.log("El número es positivo.");
} */

/* =====================================
=            Ejemplo 1.1                =
===================================== */

/* let nombre = prompt("Ingresa tu nombre:");

if (nombre) {
    alert(`Hola, ${nombre}!`);
} */


/* =====================================
=               ejemplo 2                =
===================================== */
/* Que devuelven los botones del prompt?

- aceptar devuelve una cadena vacía = "" 
- cancelar devuelve null
- En el caso de no realizar el parseo en el pedido puedo
hacerlo despues generando una nueva variable.


Al utilizar el isNaN negado lo que hacemos es comprobar
si el valor es un numero

/* !isNaN(nombre): Comprueba si el valor ingresado es un número
La función isNaN() devuelve true si el valor no es un número
por lo tanto, al usar !isNaN(nombre), estamos verificando
   si nombre ES un número. */ 

/* let nombre1 = prompt("Por favor ingresa tu nombre");

if (nombre1 === "" || nombre1 === null || !isNaN(nombre1)) {
    alert("Ingresa un dato valido");
} else {
    alert(`tu nombre es ${nombre1}`);
} */


    /* =====================================
=          Else if anidados            =
===================================== */

/* let nombre2 = prompt("Por favor ingresa tu Nombre"); */

// Validar el nombre ingresado

/* if (nombre2 === "") {
console.log("Debes ingresar un nombre válido.");
} else if (!isNaN(nombre2)) {
console.log("El nombre no puede ser un número.");
} else if (nombre2.length < 3) {
console.log("El nombre debe tener al menos 3 caracteres.");
} else {
console.log("Tu nombre es " + nombre2 + ".");
}
 */
/* =============================================
=    Ejemplo de else if con las estaciones del año =
=============================================== */

/* let mes = prompt("indica el numero de mes en el que te encuentras");

let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
estacion = "verano";
} else if (mes >= 3 && mes <= 5) {
estacion = "otoño";
} else if (mes >= 6 && mes <= 8) {
estacion = "invierno";
} else {
estacion = "primavera";
}

console.log("La estación correspondiente al mes", mes, "es", estacion); */

//------ CONDICIONES BASICAS Y ANIDADAS -----

// CONDICIONES BASICAS

/* let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
 */


/* let turnoCortePelo = false

if(turnoCortePelo === true) {
    console.log("Agendaste tu turno correctamente")
} else {
    console.log("No hay turnos por el momento")
}
 */


//*------ CONDICIONES ANIDADAS
// LAS CONDICIONES ANIDADAS SON ESTRUCTURAS "IF" DENTRO DE OTRAS ESTRUCTURAS "IF" O "ELSE". ESTO PERMITE EVALUAR MULTIPLES CONDICIONES EN SECUENCIA.

/* let edad = null;
let nombre = "Carlos";

if (edad !== null && edad !== undefined) {
    prompt(`Tienes ${edad} años`);
} else {
    if (nombre) {
        alert(`Bienvenido, ${nombre}`);
    } else {
        alert("Información incompleta");
    }
} */



/* let pasaje = 90;

if (pasaje === 90) {
    alert("saldo suficiente")
} else if (pasaje >= 85){
    alert("saldo suficiente pero te esta quedando poco")
}
else if (pasaje >= 80) {
    alert("pagaste el pasaje pero quedaste en saldo negativo, necesitas cargar urgente la sube")
}else {
    alert("saldo insuficiente necesitas cargar la sube")
} */



/* let edad = prompt("ingresa tu edad")

if (edad >= 18){
    alert("puedes ingresar")
}else{
    alert("no podes ingresar")
} */



/* let edad = prompt("ingresa tu edad") */

/* if (edad === "" || edad === null || isNaN(edad)){
    alert("ingresaste un dato no valido")
}else if (edad < 18){
    alert("no podes ingresar sos menor de edad")
}else{
    alert(`Tienes ${edad}, podes ingresar`)
}
 */


//*-------- OPERADORES LOGICOS ------*//
// Este operador "&&" da true si ambas condiciones sobre la variable "pasaje" son verdaderas si una da false el resultado final sera false.

/* let acceso = (pasaje >= 80) && (pasaje <= 100)

alert (acceso) */

// otro ejemplo del operador "&&"

/* let edad = 18;
let dinero = false;

if (edad >= 18 && dinero){
    alert ("podes ingresar al bar")
} else {
    alert ("sos menor de edad y pobre, anda a tu casa")
} */


// Este operador "||" da true si alguna de las condiciones es true pero si ambas son falsas da false.

// OPERADOR OR LOGICO "||", Retorna el primer operando verdadero o el último operando si todos son falsos. Sin embargo, considera valores "falsy" como 0, '', false, null y undefined

/* let valor1 = 0;
let resultadoOR = valor1 || "Valor predeterminado";

console.log(resultadoOR); // "Valor predeterminado" */

/* let pasaje = 100

let acceso = (pasaje > 500) || (pasaje < 200)

alert (acceso) */

/* let edad = 17;
let dinero = false;

if (edad >= 18 || dinero){
    alert ("podes ingresar al bar")
} else {
    alert ("sos menor de edad y pobre, anda a tu casa")
}

 */



/* =====================================
=     Operacion de coalicion nula (??)    =
===================================== */
/* 1. **`false`**
2. `0` (el número cero)
3. `-0` (el número negativo cero)
4. `0n`(el BigInt cero)
5. `""` (una cadena vacía)
6. `null`
7. `undefined`
8. `NaN` (Not a Number) */

// OPERADOR NULLISH COALESCING "??", El operador Nullish Coalescing (??) retorna el operando de la derecha si el operando de la izquierda es null o undefined. A diferencia de ||, no considera otros valores "falsy" como 0 o ''.

/* let valor2 = null;
let resultadoNullish = valor2 ?? "Valor predeterminado";

console.log(resultadoNullish); // 0 */

/* let nombreUsuario = prompt("Ingresa tu nombre")

let usuarioFinal = nombreUsuario ?? "Usuario anonimo"

alert(`Bienvenido ${usuarioFinal}`) */

/*
let turnoCortePelo = prompt("Reservar turno")

let turnoAsignado = turnoCortePelo ?? "No se le asigno ningun turno"
alert(turnoAsignado)
 */


//*---------- CICLOS Y CONTROL DE FLUJOS ------*//

//*--- CICLOS POR REPETICIONES ----

//---- CICLO FOR ----

/* for (let i = 0; i<=5; i++) {
    alert('Numero :' + i );
}
 */


/* for(let i = 1; i<=10; i++){
    alert(`Ahora estas en el piso numero:` + i);
}
 */

//*----- TABLA DE MULTIPLICAR -----

/* let tablaMultiplicar = parseInt(prompt("ingrese el numero para multiplicar"));

for (let i = 1; i <= 10; i++) {

    alert(`${tablaMultiplicar}multiplicado por ${i} es =` + tablaMultiplicar * i);
} */


//---- CICLO CONDICIONALES ----

/*
const password = "1234"

let passwordIngresado = prompt("ingrese su contraseña");

while (passwordIngresado = password) {
    prompt("contraseña incorrecta");
} */


    /* =====================================
=               While                =
===================================== */

/* while (condición) {
    //bloque de código a repetir
    //actualización de la condición
}

let repetir = true;

while (repetir) {
    console.log("Al infinito y...¡Más allá!");
}
   */

/* =====================================
=     Ejemplo Ludico While resolción    =
===================================== */

/* // Generamos un número secreto aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 3; // El jugador tiene 3 intentos

// Iniciamos el bucle para los intentos
while (intentosRestantes > 0) {
  // Pedimos al usuario que ingrese un número
let intentoUsuario = prompt("Adivina el número secreto (entre 1 y 10):");

  // Convertimos la entrada a un número
intentoUsuario = parseInt(intentoUsuario);

  // Verificamos si la entrada es válida
if (isNaN(intentoUsuario)) {
    alert("Por favor, ingresa un número válido.");
    continue; // Si la entrada no es un número, seguimos pidiendo el número
}

  // Comprobamos si el número ingresado es correcto
if (intentoUsuario === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número secreto.");
    break; // Termina el juego si el usuario adivina el número
} else {
    intentosRestantes--; // Restamos un intento
    alert(`No acertaste. Te quedan ${intentosRestantes} intentos.`);
}

  // Si ya no quedan intentos
if (intentosRestantes === 0) {
    alert(`Se acabaron tus intentos. El número secreto era: ${numeroSecreto}`);
}
}
 */





/* =====================================
=  Ejercicio Ludico con Switch case     =
===================================== */
/* let opcion = 0; // Inicializamos la opción en 0

// El bucle se ejecuta mientras la opción sea distinta de 5
while (opcion !== 5) {
  // Mostrar el menú de opciones
opcion = parseInt(
    prompt(`
    Menú de Operaciones:
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividir
    5. Salir
    Ingresa el número de la operación que deseas realizar:
`)
);

  // Validar que se ingresa un número válido
if (isNaN(opcion)) {
    alert("Por favor, ingresa un número válido.");
    continue; // Vuelve al inicio del bucle si no es válido
}

if (opcion >= 1 && opcion <= 4) {
    // Pedir dos números al usuario
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa solo números válidos.");
    continue;
    }

    let resultado;

    // Evaluar la opción seleccionada
    switch (opcion) {
    case 1:
        resultado = num1 + num2;
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        alert(`El resultado de la resta es: ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        alert(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case 4:
        if (num2 === 0) {
        alert("No se puede dividir entre cero.");
        } else {
        resultado = num1 / num2;
        alert(`El resultado de la división es: ${resultado}`);
        }
        break;
    }
} else if (opcion === 5) {
    alert("Gracias por utilizar la calculadora.");
} else {
    alert("Opción no válida. Intenta nuevamente.");
}
} */

//------ CICLO DO...WHILE -------

/* let i = 0;

do{
    alert('Numero:' + i);
    i++
}while (i<5)
 */



/* =====================================
=          Sentencia Break             =
===================================== */


/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
} */


/* =====================================
=          Sentencia Continue          =
===================================== */

/*
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}
 */


//----- VALIDACION DE USUARIOS -----
/*
const usuarios = [
    {nombre: "Ana", edad: 20, aceptoTerminos: true },
    {nombre:"Miguel", edad: 17, aceptoTerminos: false},
    {nombre:"Juan", edad: 28,},
    {nombre:"Tomas", edad: 15,},
]

for(let i = 0; i < usuarios.length; i++){
    if (usuarios[i].edad >= 18 && usuarios[i].aceptoTerminos)
        console.log(usuarios[i].nombre)
} */





//*------ FUNCIONES ------
// EN LAS FUNCIONES PRIMERO ARMAS LA ESTRUCTURA AGREGANDO PARAMETROS Y TODO LO QUE NECESITES Y DESPUES PARA QUE SE VEA REFLEJADO LO QUE VOS QUIERAS LO TENES QUE INVOCAR.

/* function saludar (){
    alert("Empezando con las funciones")
}

saludar() */


/* function saludar (nombre,edad,nacionalidad){
    alert(`Hola ${nombre} yo te conozco, vos tenes ${edad} años y vivis en ${nacionalidad}`)
}

saludar("Leonel", 27, "Argentina, Mendoza" ) */

/* function buscarCalle (calle){
    alert(`Buscando la calle ${calle}`)
}

buscarCalle("Furlotti. A entre Lemos y Corrientes") */


/* function telefono (motoG){
    alert(`El telefono ${motoG}`)
}

telefono("MotoG 55 se encuentra disponible")
 */

/* function cuotaInpaga (interesesGenerados) {
    const intereses = 300;
    return interesesGenerados * intereses
}

let atrasoDePago= cuotaInpaga(5)
alert(`El interes total es de ${atrasoDePago}`) */


/* function saldoTarjeta (tarjetaSube){
    const pasaje = 1000;
    return tarjetaSube - pasaje
}

let pagoPasaje = saldoTarjeta(1500)
alert(`Te quedan ${pagoPasaje} en la tarjeta sube`) */



/* function agregarLibro(titulo, autor) {
    return { titulo, autor };
}

function mostrarDetalleLibro(libro) {
    alert(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}

// Agregar un libro
let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell */


// ESTE ES MAS COMPLICADO PERO ES CUESTION DE REPASAR

/* function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5. */


/* =====================================
=               Funciones                =
===================================== */

/* const saludo = "Hola como estás?";
console.log(saludo);

function saludar() {
console.log("¡Hola estudiantes!");
}
 */
/* =====================================
=          Ejemplo suma básica          =
===================================== */

/* let num1 = 9;
let num2 = 8;
const resultado = num1 + num2;
console.log(resultado); */

/* =====================================
=           Mejor con funcion         =
===================================== */

/* function sumarNumeros() {
num1 = 7;
num2 = 9;
resultado = num1 + num2;
console.log(resultado);
}
//El resultado es impreso por consola pero nunca es devuelto.

sumarNumeros(); */

/* =====================================
=        Funcion con parametros        =
===================================== */

/* //Con parametros es decir Dinámico
function sumarNumeros(num1, num2) {
const resultadoDeLaSuma = num1 + num2;
console.log(resultadoDeLaSuma);
}

sumarNumeros(9, 8); */

//El metodo se ejecuta solo cuando se llama

/* =====================================
=          Ejemplo calculadora         =
===================================== */

/* function calculadora(primerNumero, segundoNumero, operacion) {
switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
    case "-":
    return primerNumero - segundoNumero;
    case "*":
      return primerNumero * segundoNumero;
    case "/":
    return primerNumero / segundoNumero;
    default:
    return 0;
}
}

console.log(calculadora(10, 5, "*")); */

/* =====================================
=            Scope global/local            =
===================================== */

/* let miNombre = "John Doe"; // variable global

function saludar() {
  let miNombre = "Juan Coder"; // variable local
console.log(miNombre);
}

//Accede a nombre global
console.log(miNombre); // → “John Doe”
//Accede a nombre local
saludar(); // → “Juan Coder”** */

/* =====================================
=   🎗️Simulador de aplicacion de tareas  =
===================================== */
/*Bienvenida al Usuario
Menú de Opciones:
Funcionalidades del Menú:
- Opción 1 – Ingresar una Nueva Tarea:
    - Solicitar al usuario que ingrese una tarea mediante **`prompt()`**.    
    - Asignar un **número secuencial** a cada nueva tarea.
    - Almacenar la tarea en una **lista acumulativa** que se actualizará con cada entrada.    
- Opción 2 – Ver Mis Tareas:
    - Mostrar un **listado numerado** con todas las tareas ingresadas hasta el momento.
    - Si no hay tareas registradas, debe mostrar el mensaje: "No tienes tareas pendientes".
- Opción 3 – Salir:
	- Finalizar el programa y mostrar un **mensaje de despedida**.
	
Validación de Entrada:
- Si el usuario ingresa una opción inválida, debe mostrarse el mensaje: */

/* =====================================
=  📌Solucion con estructuras de control  =
===================================== */

/* alert("Bienvenido a la app de tareas!!!");

let opcion = prompt(
"Ingresa una opcion para continuar\n 1. Inrgesar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
);

let tareas = "";
let numeroTarea = 0;

while (opcion !== "3") {
if (opcion === "1") {
    let nuevaTarea = prompt("Ingresa una nueva tarea");
    numeroTarea += 1;
    tareas += `${numeroTarea}. ${nuevaTarea}\n`;
} else if (opcion === "2") {
    if (tareas === "") {
    alert("No tienes tareas pendientes");
    } else {
    alert(`tus tareas son ${numeroTarea}\n${tareas}`);
    }
} else {
    alert("Ingresa un dato valido");
}
opcion = prompt(
    "Ingresa una opcion para continuar\n 1. Inrgesar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
);
}

alert("Nos vemos luego!!!"); */

/* =====================================
=   📌Éjemplo mejorado con funciones     =
===================================== */

/* let tareas = "";
let numeroTarea = 0;

function mostrarOpciones() {
return prompt(
    "Ingresa una opción para continuar:\n 1. Ingresar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
);
}

function agregarTarea() {
let nuevaTarea = prompt("Ingresa una nueva tarea");
if (nuevaTarea) {
    numeroTarea++;
    tareas += `${numeroTarea}. ${nuevaTarea}\n`;
} else {
    alert("No ingresaste una tarea");
}
}

function mostrarTareas() {
if (numeroTarea === 0) {
    alert("No tienes tareas pendientes");
} else {
    alert(`Listado de tareas\n ${tareas}`);
}
}

let opcion = mostrarOpciones();

while (opcion !== "3") {
switch (opcion) {
    case "1":
    agregarTarea();
    break;
    case "2":
    mostrarTareas();
    break;
    default:
    alert("Por favor, ingresa una opcion valida");
    break;
}

opcion = mostrarOpciones();
}

alert("Nos vemos luego"); */




/* =====================================
=   ARRAYS Y OBJETOS     =
===================================== */

//*--- ARRAYS


/* let numeros = [1,2,3,4]

console.log(numeros);

console.log(numeros[2]); */

/* let frutas =["Manzana", "Banana","Pera","Kiwi"]

console.log(frutas);
console.log(frutas[3]); */

/* let matrizPalabras = [
    ["Auto","Motocicleta","Camioneta","Colectivo"],
    ["Lapicera","Corrector","Lapiz","Goma de borrar"],
    ["Lunes","Martes","Miercoles","Jueves"],
]

console.log(matrizPalabras);
console.log(matrizPalabras[2][3]);
 */


//------ ORDENAR ARRAYS

// METODO SORT
// Me los ordena de la siguiente manera (1,200,3,45) porque lo hace de forma decreciente pero tomando solamente el primer digito que figura en cada numero.
/* let numeros = [3,200,1,45];

numeros.sort();
console.log(numeros); */

// SEGUNDO METODO SORT
// Ahora me los ordena de menor a mayor como corresponde que seria tomando todos los digitos que figuran por numero.

/* let numeros1=[3,200,1,45];

numeros1.sort((a,b)=> a-b)
console.log(numeros1); */


// METODO SORT PERO CON PALABRAS
// Me ordena mal las palabras porque primero me esta priorizando las palabras que empiezan con mayusculas y despues las que empiezan con minusculas.

/* let palabras = ["programacion","Banana","zorro","auto"];

palabras.sort();
console.log(palabras); */

// METODO SORT CON PALABRAS PERO USANDO "localeCompare"
// El "localeCompare" sirve para que no haya discrepancia entre las mayusculas y las minusculas, asi es como logra ordenarte todas las palabras en orden alfabetico como corresponde sin importar si la palabra empieza con mayuscula o minuscula.


/* let palabras1 = ["programacion","Banana","zorro","auto"];

palabras1.sort((a,b)=> a.localeCompare(b));
console.log(palabras1); */


//*------ METODO REVERSE
// Lo que hace es invertir el orden de los elementos en un array.


/* let numeros1=[3,200,1,45];

numeros1.sort((a,b)=> a-b)
console.log(numeros1); */

/* numeros1.reverse()
console.log(numeros1) */

//*---- CONCATENAR ARRAYS

// BASICO CON COMA

/* let colores = ["Rojo","Azul","Verde","Amarillo"];

let resultado = colores.join();
console.log(resultado); */

// USO CON SEPARADOR DE ESPACIO

/* let nombres = ["Leonel", "Agustin", "Villegas", "Romero"];

let listaNombres = nombres.join(' ');
console.log(listaNombres); */

// USO CON SEPARADOR DE GUION 

/* let elementos = ["Hidrogeno","Oxigeno","Carbono"];

let resultadoElementos = elementos.join('-');
console.log(resultadoElementos); */

// USO CON SEPARADOR VACIO

/* let letras = ["H","o","l","a"];

let resultadoLetras = letras.join('');
console.log(resultadoLetras); */



//*--- OBJETOS LITERALES Y SU RELACION
// En este ejemplo, nombre, edad, y ciudad son las claves, y "Juan", 30, y "Buenos Aires" son los valores correspondientes.

/* const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};
 */


// A diferencia de los arrays, que son colecciones indexadas de elementos, los objetos literales no mantienen un orden específico de sus elementos y no se accede a sus valores mediante índices numéricos. En los arrays, el acceso a los elementos se realiza a través de índices comenzando desde 0, mientras que en los objetos, el acceso se realiza a través de las claves definidas.


/* // Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse" */


//---- ARRAYS DE OBJETOS

/* let arrayObjetos = []

arrayObjetos.push({
    id:1, nombre:"producto 1"
});

arrayObjetos.push({
    id:2, nombre:"producto 2"
});

arrayObjetos.push({
    id:3, nombre:"producto 3"
});

console.log(arrayObjetos);

for(let objetos of arrayObjetos){
    console.log(objetos.nombre);
    
} */

// Se utiliza el bucle "for of" para recorrer los elementos del array y trabajar con los datos almacenados en cada objeto. 
// Se ingresa a cada uno de los objetos y asi buscarnos el valor de nombre que en este caso seria producto 1,2 y 3.
// Asi es como se trabajan arrays con objetos literales para estructurar datos de una manera mas compleja y manejar datos de manera mas dinamica con el ciclo "for..of"


//---- AGREGAR OBJETOS CON "PUSH"
// Para agregar nuevos objetos a un array, se utiliza el método push. Esto es especialmente útil cuando se está construyendo una lista dinámicamente.

/* const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 25 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }] */


//---- ORDENAR OBJETOS CON "SORT" 
// El método sort puede ser personalizado para ordenar arrays de objetos basándose en alguna clave específica de los objetos.

/* usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }] */


//---- FILTRAR CON "FILTER"
// Para filtrar elementos de un array basándose en una condición, se usa filter, que es muy útil para obtener subconjuntos de un array basados en propiedades de los objetos.

/* const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
console.log(mayoresDe25);
// Resultado: [{ nombre: "Luis", edad: 30 }] */


//---- BUSCAR UN OBJETO CON "FIND"
// Para encontrar el primer objeto que cumple con una condición específica, se usa find.


/* const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 } */



/* const miArray = ["Fernando", 89, true, false]; */
/* =====================================
=          Acceso a elementos          =
===================================== */

/* console.log(miArray);
console.log(miArray[0]);
console.log(miArray[1]);
console.log(miArray[2]);
console.log(miArray[3]); */

/* =====================================
=         Recorrido de array            =
===================================== */

/* for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
} */

/* =====================================
=    Recorrido de array for of        =
===================================== */

/* for (const elemento of miArray) {
  console.log(elemento);
} */

/* =====================================
=               metodo push()            =
===================================== */

/* miArray.push("Juan");
console.log(miArray); */

/* =====================================
=               metodo pop()             =
===================================== */
/* miArray.pop();
console.log(miArray); */

/* =====================================
=               Unshift()                =
===================================== */

/* miArray.unshift("Pedro");
console.log(miArray); */

/* =====================================
=               Shift()                =
===================================== */

/* miArray.shift();
console.log(miArray); */

/* =====================================
=               splice()                =
===================================== */

/* const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

const nombres = ["fernando", "Juan", "Pedro", "MAtias", "Gonzalo"];

const porcionDeNombres = nombres.slice(0, 3);
console.log(porcionDeNombres);

nombres.splice(1, 3);
console.log(nombres); */

/* =====================================
=               join()                =
===================================== */
/* const miArray = ["Fernando", 89, true, false];

const nuevoArray = miArray.join("-");
console.log(nuevoArray); */

/* =====================================
=               inludes()                =
===================================== */

/* const existe = miArray.includes("Fernando");
console.log(existe); */

/* =====================================
=               indexOf                =
===================================== */

/* const indice = miArray.indexOf(90);
console.log(indice); */

/* =====================================
=               Objetos                =
===================================== */

/* let nombre = "Juan";
let edad = 35;
let direccion = "Santa Rosa";

const Usuario = {
  nombre: "Juan",
  edad: 35,
  direccion: "Santa Rosa",

  datospersonales: {
    telefono: 31231,
    email: "fernando@email",
  },
};

console.log(Usuario.direccion);
console.log(Persona["nombre"]);

console.log(Usuario.datospersonales.telefono);
console.log(Usuario["datospersonales"]["telefono"]);
 */


/* =====================================
=         funcion constructora         =
===================================== */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  presentarse() {
    return `Hola soy ${this.nombre}`;
  }
}

const persona1 = new Persona("Pedro", 32, "Santa Julia");
const persona2 = new Persona("Fernando", 46, "Arturo ");
console.log(persona1.presentarse);
console.log(persona2); */



/* =====================================
=         Ecommerce         =
===================================== */


/* class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarDetalle() { }

    verificarStock() { }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProductos(producto) {
        this.productos.push(producto);
    }

    generarTotal() {
        let total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }

    mostrarListado() {
        for (let index = 0; index < this.productos.length; index++) {
            const producto = this.productos[index];
            console.log(`- ${producto.nombre} - $${producto.precio}`);
        }
    }
}

const pan = new Producto("Pan", 1000);
const leche = new Producto("Leche", 2000);

const carrito = new Carrito();

carrito.agregarProductos(pan);
carrito.agregarProductos(leche);

carrito.mostrarListado();

const ListadoDeProductos = [
    {
        nombre: "Pan",
        precio: 1000,
    },
    {
        nombre: "Leche",
        precio: 1000,
    },
    {
        nombre: "Tomate",
        precio: 1000,
    },
]; */