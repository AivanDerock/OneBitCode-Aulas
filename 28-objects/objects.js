const object = () => {
  let pessoa = {}
  pessoa.nome = 'Ivan Rocha'
  pessoa.idade = 18 
  pessoa.endereco = {
    rua: 'Estela mari rezende',
    numero: 251,
    pontoReferencia: 'escola maria lenir haluch de bastos'
  }
  pessoa.trabalho = 'Yusen Logicas'
  pessoa.colegas = ['Ana', 'Ivan', 'Diogo']

  console.log(pessoa)
}

object()