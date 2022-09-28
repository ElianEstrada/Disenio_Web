//Este es un comentario de 1 linea

/*Este es un comentario
de multiples
lineas*/

//Como imprimir en Consola

/*
Sintaxys del Console log

Palabras reservadas - son palabras que el lenguaje tiene a su disposición por
defecto, es decir que nostros no podemos usarlas

'console' '.' 'log' '(' [<expresion>] ')'

*/

// console.log("Hola Mundo");

/*
Tipos de expresiones

Tipos de datos primitivos
Enteros         - int | integer     valores(-10k hasta 10k)
Flotantes       - float | double    valores(2.5, 10.0001, ...)
Cadena de texto - string | str  valores("cualquier cosa" | 'cualquier cosa')
Booleanos       - bool | booleanos  valores(true, false)
*/

// console.log(1);
// console.log(2.5);
// console.log("hola");
// console.log(true);
/*
Syntaxis Declarar variables

('let' | 'var') <nombre> ['=' <expresion>]

*/

// let variable1 = 2; 
// console.log(variable1);
// variable1 = "Hola";
// console.log(variable1);


/*Nombres de variables*/
// que tienen que iniciar con '_' o una letra
// que pueden estar seguidos de una letra | '_' | numero

// let a = 1
// let _v = 2
// //let 9a = 3 - Es un error
// let n__________n = 10

// let num = 10

/*Estructuras de Control*/

// If | If - else | If - else if - else

/*
Syntixis de If

'if' '(' <expresion-booleana> ')' '{' [<bloque_codigo>] '}' ['else' ['if'] '{' [<boloqu_codigo>] '}']
*/

let edad = 19;

if (edad >= 18) {
    //Bloque si la condición es verdadera
    console.log("La persona es mayor de edad");
} else {
    //bloque si la condición es falsa
    console.log("La persona es menor de edad");
}