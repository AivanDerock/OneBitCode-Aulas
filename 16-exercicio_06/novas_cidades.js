const nova_cidade = () => {
  let nome_turista = prompt('Qual é o seu nome?')
  let cidade_natal = prompt('Qual é a sua cidade natal?')
  let cidades_visitadas = []
  let visita_cidade = prompt(
    `${nome_turista}, já esteve em outras cidade? (sim/não)`
  ).toLowerCase()

  while (visita_cidade === 'sim') {
    let cidade = prompt('Quais cidades visitou?')
    cidades_visitadas.push(cidade)

    let adicionarOutra = confirm('Gostaria de adicionar outra cidade visitada?')
    if (!adicionarOutra) {
      break
    }
  }

  while (true) {
    let adicionarMais = confirm('Gostaria de adicionar mais cidades visitadas?')
    if (!adicionarMais) {
      break
    }

    let cidade = prompt('Quais cidades visitou?')
    cidades_visitadas.push(cidade)
  }

  alert(`${nome_turista}, revise os dados fornecidos: \n
  - Nome: ${nome_turista} \n
  - Cidade natal: ${cidade_natal} \n
  - Cidades visitadas: ${cidades_visitadas.join(', ')}`)
}


nova_cidade()
