const batiburrillo = [3, 'Pepe', true, [1,4], {id: 21, userName: 'yo'}]

const amigos = ['Pepe', 'Rosa', 'Juan', 'Elena']


for (let i = 0; i < amigos.length; i++) {
    const item = amigos[i];
    // Template string
    console.log(`Hola ${item}, que tal estas`)
}

const amigos_as = [
    {nombre: 'Pepe', genero: 'M'},
    {nombre: 'Rosa', genero: 'F'},
    {nombre: 'Juan', genero: 'M' },
    {nombre: 'Elena', genero: 'T'}]

    for (let i = 0; i < amigos_as.length; i++) {
        const item = amigos_as[i];
        let saludo = 'Hola'
        if (item.genero == 'M') {
            saludo = 'Hola amigo'
        } else if (item.genero == 'F'){
            saludo = 'Hola amiga'
        }
        console.log(`${saludo} ${item.nombre}, como estas`)
    }