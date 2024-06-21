const cont_finance = () => {
  let continuar = true
  let nome = prompt('Qual é o seu nome ?')
  let quantia = parseFloat(
    prompt(`${nome}, qual é a quantia inicial? (Dinheiro disponível)`)
  )
  let lista_dinheiro = [quantia]

  do {
    let escolhas = prompt(
      `${nome}, você tem R$${quantia} disponível. Gostaria de: \n 1 - Adicionar \n 2 - Remover \n 3 - Sair `
    )

    let soma, sub
    switch (escolhas) {
      case '1':
        soma = parseFloat(prompt(`${nome}, qual o valor a ser adicionado?`))
        quantia += soma
        break
      case '2':
        sub = parseFloat(prompt(`${nome}, qual o valor a ser removido?`))
        quantia -= sub
        break
      case '3':
        continuar = false
        break
      default:
        alert('Nenhuma opção válida selecionada!')
    }

    if (escolhas === '1') {
      lista_dinheiro.push(quantia)
    } else if (escolhas === '2') {
      lista_dinheiro.push(quantia)
    } else if (escolhas === '3') {
      break
    } else {
      alert('Erro')
    }
  } while (continuar)

  alert(`Operações concluídas. Você tem R$${quantia} disponível.`)
}

cont_finance()
