class Persona {
    constructor(nombre = '', genero = '', edad = 0) {
        this.nombre = nombre
        this.genero = genero
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const p1 = new Persona('Pepe', 'M', 23)
console.log(p1)
p1.saludar()

class Alumno extends Persona {
    constructor(nombre = '', genero = '', edad = 0, curso = '') {
        super(nombre, genero, edad)
        this.curso = curso
    }
    saludar () {
        super.saludar()
        console.log(`Y estudio ${this.curso}`)
    }
    estudiar () {
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

const a1 = new Alumno('Elena', 'F', 26, 'Angular')
console.log(a1)
a1.saludar()
a1.estudiar()