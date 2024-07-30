const person = [
  { nivel: 42, nome: 'Thrall', raca: 'Orc', classe: 'Xamã' },
  { nivel: 28, nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Varok', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
  { nivel: 26, nome: 'Jaina', raca: 'Humano', classe: 'Maga' },
  { nivel: 39, nome: 'Tyrande', raca: 'Elfo Noturno', classe: 'Sacerdotisa' },
  { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' }
]

// Map
const nomes = []

for (let i = 0; i < person.length; i++) {
  nomes.push(person[i].nome)
}
console.log(nomes)

const nomesMap = person.map(function (personagem) {
  return personagem.nome
})
console.log(nomesMap)

// ForEach
// const flamengo = person.forEach(function (personagens) {
//   console.log(personagens.nome)
// })

// Filter
const orcs = []

for (let i = 0; i < person.length; i++) {
  if (person[i].raca === 'Orc') {
    orcs.push(person[i])
  }
}
console.log(orcs)

const orcsFilter = person.filter(function (personagem) {
  return personagem.raca === 'Orc'
})
console.log(orcsFilter)


// Reduce 

const nivelTotal = person.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)
console.log([nivelTotal])

const racas = person.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push[personagem]
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})
console.log(racas)

// Sort

const personagensOrder = person.slice().sort(function (a, b) {
  return a.nivel - b.nivel
})
console.log([person])

const personagensOrder2 = person.slice().sort(function (a, b) {
  return b.nivel - a.nivel
})
console.log([personagensOrder])
console.log([personagensOrder2])
console.log([person])