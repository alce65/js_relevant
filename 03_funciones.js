'use strict'
// Declaracion

let global = 'Soy global'

function sumar(a = 0,b = 0) {
    let local = 'Soy local'
    console.log(global)
    console.log(local)
    // return Number(a) + Number(b)
    return +a + +b
}

function restar(a=0,b=0) {
    return a-b
}

// console.log(local) Daría error

// Uso o ejecución
let x = sumar(6,7)
console.log(x)
// console.log(sumar(6,7))

console.log(sumar(5))

console.log(sumar(true,false))

console.log(restar('34', 2))
console.log(sumar('34', 2))


// Funciones y paso de parametros

function modificar(n1) {
    n1 = n1 + 1000
}

let n1 = 23
modificar(n1) // paso por valor
console.log(n1)

function modificarOoo(n1) {
    n1.user = null
}

let o1 = {user: 'Pepe'}
modificarOoo(o1) // paso por referencia 
console.log(o1)


function modificarLocal(n1) {
    n1 = {...n1}
    n1.user = null
}

let o2 = {user: 'Juana'}
modificarLocal(o2) // paso por referencia 
o2.edad = 23
console.log(o2)

sumar.autor = 'Yo'
console.log(typeof sumar)
console.log(sumar)