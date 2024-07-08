const truco = () => {
  alert('Seja bem-vindo ao jogo de truco!')
  let cartasBaralho = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ]

  const puxarCarta = () => {
    if (cartasBaralho.length > 0) {
      let puxarCarta = confirm('Gostaria de puxar uma carta?')
      if (puxarCarta) {
        let cartaPuxada = cartasBaralho.shift()
        alert(`Carta puxada: ${cartaPuxada}`)
      } else {
        alert('Por favor, puxe uma carta.')
      }
    } else {
      alert('Não há mais cartas no baralho.')
    }
  }

  const adicionarCarta = () => {
    let adicionarCarta = confirm(
      'Gostaria de adicionar uma nova carta ao baralho?'
    )
    if (adicionarCarta) {
      let nomeCarta = prompt('Qual é o nome da nova carta?')
      if (nomeCarta) {
        cartasBaralho.push(nomeCarta)
        alert(`Carta adicionada: ${nomeCarta}`)
      } else {
        alert('Por favor, adicione uma nova carta.')
      }
    }
  }

  const sair = () => {
    alert('Obrigado por jogar!')
  }

  while (true) {
    puxarCarta()

    if (cartasBaralho.length === 0) {
      alert('O baralho está vazio. Fim do jogo!')
      break
    }

    let continuar = confirm('Deseja continuar jogando?')
    if (!continuar) {
      sair()
      break
    }

    adicionarCarta()
  }
}

truco()
