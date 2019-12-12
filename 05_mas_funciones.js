'use strict'
// Declaracion

function sumar(a = 0,b = 0) {
    return Number(a) + Number(b)
}

console.log(sumar(3,6))

// Asignacion de funciones

const restar = function (a = 0,b = 0) {
    return a - b
}

console.log(restar(3,6))

// Arrow functions (Lambdas)

/* const multiplicar = (a = 0, b = 0) => {
    return a * b
} */

const multiplicar = (a = 0, b = 0) => a * b

console.log(multiplicar(3,6))

const cuadrado = a => a * a

/* let r = cuadrado(5)
console.log(r) */

console.log(cuadrado(5))