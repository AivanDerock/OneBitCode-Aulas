const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalff']

console.log(arr)

// Push
arr.push('Gollum')

console.log(arr)

// Pop
arr.pop()

console.log(arr)

// Unshift
arr.unshift('Samuel')

console.log(arr)

// Shift
arr.shift()

console.log(arr)

// includes
console.log(arr.includes('Ivan'))
console.log(arr.includes('Sam'))
 
// indexOf
console.log(arr.indexOf('Ivan'))
console.log(arr.indexOf('Pippin'))

// slice
console.log(arr.slice(3, 5))
console.log(arr.slice(-4, -2))

// concat 
console.log(arr.concat(['Legolas', 'Gimli']))

// splice
console.log(arr.slice(3, 5, 'Gollum'))
console.log(arr)

// Estrutura de repetição com Arrays
let d = ''
for (let i = 1; i < arr.length; i++) {
  d = arr[i]
  console.log(`${d} está na ${i} posição`)
}