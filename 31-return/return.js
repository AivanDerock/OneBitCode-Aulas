const calcMedia = (a, b) => {
  const media = (a + b) / 2
  return media
}

let c = calcMedia(10, 2)
console.log(c)

const criarP = (nome, preco) => {
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}
 
console.log(criarP('Arroz', 12))

const calcRetangular = (base, altura) => {
  return base * altura
}

console.log(calcRetangular(3, 5))

const maioridade = (idade) => {
  if (idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

console.log(maioridade(30))
console.log(maioridade(17))