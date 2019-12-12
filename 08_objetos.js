
function Amigo (nombre, genero) {
    this.nombre = nombre
    this.genero = genero
    /* this.saludar = function () {
        console.log(`Hola, soy ${this.nombre}`)
    } */
}
Amigo.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

const amigos_as = [
    new Amigo('Pepe', 'M'),
    new Amigo('Rosa', 'F'),
    new Amigo('Juan', 'M'),
    new Amigo('Elena', 'T')]

console.log(amigos_as)

const a1 = new Amigo('Ernesto', 'M')
console.log(a1)
const a2 = new Amigo('Carla', 'F')


a1.saludar()
a2.saludar()