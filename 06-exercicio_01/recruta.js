function recruta() {

  let nome = prompt('Qual é o seu primeiro nome?')
  let sobrenome = prompt('Qual é o seu sobrenome?')
  let campoEstudo = prompt('Qual é o seu campo de estudos?')
  let anoNascimento = prompt('Qual é o seu ano de nascimento?')

  let dataAtual = new Date()
  let anoAtual = dataAtual.getFullYear()

  let idade = anoAtual - anoNascimento

  var dadosConfirm = confirm(
    `Você escreveu os dados corretamente? \n Revisar dados: 
    \n - Nome: ${nome} \n - Sobrenome: ${sobrenome} \n - Campo de estudo: ${campoEstudo} \n - Idade: ${idade}`
  )

  if (dadosConfirm) {
    alert(`Seu cadastro foi concluído com sucesso! ${nome} ${sobrenome}.`)
  } else {
    alert('Por favor, revise os dados e tente novamente.')
  }
}

recruta()
