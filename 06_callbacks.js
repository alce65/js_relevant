function calcular(a = 0, b = 0, callback) {
    console.log(callback(a, b))
}


const sumar = function (x,y) { 
    return x+y
}

calcular(5, 7, sumar)
// No seria un callback calcular(5, 7, sumar())


calcular(5, 7, function (x,y) {return x-y} )

calcular(5, 7, (x,y) => x*y )