const soma = (a, b) => {
  return a + b
}

let operacao = soma

console.log(operacao(4, 5))

operacao = function (a, b) {
  return a - b
}

console.log(operacao(4, 5))

olaMundo()

function olaMundo() {
  console.log('Ola mundo')
}

const oiMundo = function () {
  console.log('oi mundo')
}

oiMundo()
