// Casting a number

let x = '22'
console.log(3 * x) // -> console.log(3 * Number(x))
console.log(3 + x) // -> console.log(String(3) + x)
x = '22A'
console.log(3 * x)
x = true
console.log(3 * x)
x = false
console.log(3 * x)


// Rare numbers
console.log(3 * 'x')
console.log(0 / 0)
console.log(1 / 0)
console.log(-1 / 0)


// Casting a Boolean
// Trulys 

// Falsys
x = false
console.log(Boolean(x))
x = 0
console.log(Boolean(x))
x = null
console.log(Boolean(x))
x = undefined
console.log(Boolean(x))
x = ''
console.log(Boolean(x))
x = NaN
console.log(Boolean(x))
console.log(!!x)

// Trulys
x = 'Pepe'
console.log(Boolean(x))
x = 109
console.log(Boolean(x))
x = []
console.log(Boolean(x))
x = {}
console.log(Boolean(x))