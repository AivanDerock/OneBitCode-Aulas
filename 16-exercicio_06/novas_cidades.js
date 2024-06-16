function novas_cidades() {
  let nome_turista = prompt('Qual é o seu nome?')
  let nome_cidade_natal = prompt(`${nome_turista}, qual é a sua cidade natal?`)
  let cidades_visitadas = []
  let visita_cidade = prompt(
    `${nome_turista}, você visitou alguma cidade? (sim/não)`
  ).toLowerCase()

  while (visita_cidade === 'sim') {
    let nome_cidade = prompt('Qual é o nome da cidade visitada?')
    cidades_visitadas.push(nome_cidade)

    let add_cidade = confirm('Gostaria de adicionar outra cidade?')
    if (!add_cidade) {
      break
    }
  } 

  let dados = confirm(`${nome_turista}, os dados estão corretos?`)

  if (dados) {
    alert(`Dados: \n
      - Nome: ${nome_turista} \n
      - Cidade Natal: ${nome_cidade_natal} \n
      - Cidades Visitadas: ${cidades_visitadas.join(', ')}....`)
  }
}

novas_cidades()
