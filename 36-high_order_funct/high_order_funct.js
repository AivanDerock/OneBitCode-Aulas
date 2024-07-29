const calc = (a, b, opera) => {
  console.log('Realizando opercao...')
  const resultado = opera(a, b)
  return resultado
}

const somar = (x, y) => {
  console.log('Realizando uma soma')
  return x + y
}

console.log(calc(3, 5, somar))

console.log(
  calc(8, 4, function (x, y) {
    console.log('Realizando uma subtracao')
    return x - y
  })
)

const exibirElementos = (elemento, indice, array) => {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ['Maça', 'Banana', 'Laranja', 'Limão']

lista.forEach(exibirElementos)

lista.push('Maracuja')

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})

lista.push('Jabuticaba')

for (let i = 0; i < lista.length; i++) {
  exibirElementos(lista[i], i, lista)
}
