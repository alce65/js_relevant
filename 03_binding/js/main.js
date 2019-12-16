export function main() {
    
    // Definir nodos del DOM
    const nodoNombre = document.querySelector('#nombre')
    const nodoOutput = document.querySelector('#out1')
    const nodoOutputP = document.querySelector('#p-out')
    const nodoBtnBorrar = document.querySelector('#btn-borrar')
    // document.querySelectorAll('p')

    const nodoNombre2 = document.querySelector('#nombre2')
    const nodoOutput2 = document.querySelector('#out2')
    const nodoOutputP2 = document.querySelector('#p-out2')
    const nodoBtnMostrar2 = document.querySelector('#btn-mostrar2')
    const nodoBtnBorrar2 = document.querySelector('#btn-borrar2')  

    // Codigo de los manejadores de eventos
    const render = () => {
        console.log(nodoNombre.value)
        nodoOutput.value = nodoNombre.value
        nodoOutputP.innerHTML = `Hola, ${nodoNombre.value}` 
    }

    const onBorrar = (ev) => {
        console.log(ev.target.id)
        if ( ev.target.id == 'btn-borrar') {
            nodoNombre.value = null
            render()
        } else if (ev.target.id == 'btn-borrar2') {
            nodoNombre2.value = null
            onMostrar()
        }
    }

    const onMostrar = () => {
        nodoOutput2.value =  nodoNombre2.value
        nodoOutputP2.innerHTML = nodoNombre2.value
    }

    // Asociar eventos con sus manejadores (handlers / listeners)
    nodoNombre.addEventListener('input', render )
    nodoBtnBorrar.addEventListener('click', onBorrar)
    nodoBtnBorrar2.addEventListener('click', onBorrar)
    nodoBtnMostrar2.addEventListener('click', onMostrar)

    // Codigo inicial que se ejecuta

    nodoNombre.value = 'Pepe'
    render()    
}