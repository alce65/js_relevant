'use strict'

/* Datos en JS - Tipos elementales */

'Pepe' // string
23 // number
true // boolean
false // boolean

/* Variables: tipado debil y dinámico */

let userName // Declaracion
console.log(typeof userName)
userName = 'Ramón'
console.log(typeof userName)
userName = 25
console.log(typeof userName)
userName = true
console.log(typeof userName)

// malHecho = 123 // error por no declarar
// Declaracion e inicializacion
let bienHecho = 123

/* Tipos referenciados */

// objetos

let user = {}
console.log(typeof user)
//  objetos literales notacion JSON
user = {
    name: 'Rosa',
    edad: 24,
    isAluma: true,
    direccion: {
        calle: 'c/ Pez',
        numero: '2',
        poblacion: 'Cadiz'
    }
}

console.log(user.direccion.poblacion)

user.altura = 176
user.edad = user.edad + 1
delete user.isAluma
console.log(user)

// objetos: Arrays

let array = []
console.log(typeof array)

let aficiones = ['leer', 'escribir', 'pintar']
console.log(aficiones[0])
aficiones[aficiones.length] = 'cantar'
// aficiones[100] = 'más cosas'
// posible pero no suele hacerse
console.log(aficiones)

/* Constantes */

const id = 12
// id = 13 // error
console.log(id)

/* Constante y referencias */

const mascota = {
    especie: 'pez',
    nombre: 'Cleo',
    edad: 3
}
mascota.edad = 4
console.log(mascota)

// mascota = 6 error

let r1 = 21
let r2 = r1 // Asignación de valor

// Asignación de referencia
let mascota2 = mascota

mascota.especie = 'Iguana'
console.log(mascota, mascota2)

// Clonar objetos
let mascota3 = {...mascota}
mascota3.especie = 'lagarto'
console.log(mascota, mascota2, mascota3)