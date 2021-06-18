//CONDICIONALES 4

//EJERCICIO Nº6
/*

let cantidad = parseInt(prompt("ingrese"));

for (let i = 1; i <= cantidad; i++) {
    console.log(i);
}



//EJERCICIO Nº7
let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un 2do numero"));

for (let i = num1; i <= num2; i++) {
    console.log(i);
}



//EJERCICIO Nº8
let cantidad = parseInt(prompt("cuantos numeros quiere ingresar?"));
let numero;
let mayor = 0;
let resultado = 0;
for (let i = 1; i <= cantidad; i++) {
    numero = parseInt(prompt("ingrese numero"));
    resultado = resultado + numero;
    console.log(numero);
    console.log("Resultado " + resultado);
    if (numero > mayor) {
        mayor = numero;
        console.log("el mayor es " + mayor);
    }
}



//EJERCICIO Nº9

let menor;

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros que quiere ingresar "));
let numero = prompt("ingrese numero");
while (numero == 0) {
    numero = prompt("Ingrese numero que no sea cero");
}
console.log(numero);
menor = numero;

for (let i = 0; i < cantidad - 1; i++) {

    numero = prompt("Ingrese numero");
    while (numero == 0) {
        numero = prompt("Ingrese numero que no sea cero");

    }
    if (numero < menor) {
        menor = numero;
    }


    console.log(numero);S



}
console.log("el menor es: " + menor);*/



//EJERCICIO Nº10
/*let asterisco = "*";
let numero = parseInt(prompt("ingrese un numero"));

console.log(asterisco.repeat(numero));


const asterisco = "*";

let numero = parseInt(prompt("ingrese un numero"));
let i = 0;
do {
    i = i + 1;
    document.write(asterisco);
} while (i < numero)

let numero = parseInt(prompt("ingresa un numero"));
let asterisco = "*";
for (let i = 0; i < numero; i++) {
    asterisco += "*";
    //google ☻ me dolio la cabeza jaja

}
console.log(asterisco);



//EJERCICIO Nº11      "EXPONENCIACION"
let base = parseInt(prompt("ingrese un numero de base"));
let exp = parseInt(prompt("ingrese exponente"));
let result = 1;

for (let i = 0; i < exp; i++) {
    result = result * base;


    console.log(result);
}
console.log("el resultado de la exponenciacion es: " + result);*/



//EJERCICIO Nº12      "FACTORIAL"
/*let n = parseInt(prompt("ingrese numero"));
let total = 1;
let fact = 0;
let ast = "*";
for (let i = n; i >= 1; i--) {
    total = total * i;

    fact += ast + " " + i + " ";
    console.log(fact.replace("0", ""));

}

console.log(total);
fact = fact.replace("0", "");
console.log(" Factorial de " + n + "! es: " + fact.replace("*", "") + " = " + total);
*/



//EJERCICIO Nº13 PEDIR UN NUMERO Y MOSTRAR SUS DIVISORES;

/*let numero = parseInt(prompt("ingrese un numero"));

for (i = numero; i <= numero && i > 1; i--) { //prohibido dividir por cero

    if (numero % i == 0) {
        console.log(numero + " es divisible por : " + i);
    }

}
*/


//EJERCICIO Nº14 "Hola guayerd, 4" y que devuelva esos 4 indices
/*let string = prompt("ingrese una frase y un numero");

console.log(string.length);
console.log(string.charAt(string.length - 1));
let posiciones = parseInt(string.charAt(string.length - 1)); //solo indices de una cifra :-) jaja
let parcial = string.slice(0, posiciones);
console.log(parcial);

for (let i = 0; i < parcial.length; i++) {
    console.log(parcial.charAt(i));
}
*/



//EJERCICIO Nº15
/*let lista = [];
let producto;
do {
    producto = prompt("ingresa tu lista de compra | cero para terminar");
    if (producto !== "0") {
        lista.push(producto);
    }

} while (producto !== "0");

console.log(lista);
//productos separados por coma
let coma = ",";
let separados = 0;
for (let i = 0; i < lista.length; i++) {
    separados += coma + " " + lista[i];
    separados = separados.replace(0, " ");
}
separados = separados.replace(",", "");
console.log("Separados por coma: \n\n" + separados + ".");
*/



//EJERCICIO Nº16     Ingresar numeros hasta ingresar un divisible por 3 y cortar
let numeros = [];
let numero;
do {
    numero = parseInt(prompt("ingresa numeros"));
    while (numero == 0) {
        numero = parseInt(prompt("ingresa numeros menos el cero"));
    }
    if (numero % 3 !== 0) {
        numeros.push(numero);
    }
} while (numero % 3 !== 0);
if (numero % 3 === 0) {
    console.log("El numero " + numero + " corto el proceso por ser divisible por 3 y se dejo fuera del arreglo")
}

console.log("tus numeros son: " + numeros);