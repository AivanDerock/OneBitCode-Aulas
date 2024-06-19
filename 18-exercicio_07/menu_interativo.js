const menu = () => {
  let opcao

  do {
    opcao = parseFloat(
      prompt(
        'Escolha uma das opções: \n 0 - Inicio \n 1 - Quem somos \n 2 - Contato \n 3 - Comentarios \n 4 - Email \n 5 - Encerrar'
      )
    )

    if (opcao >= 0 && opcao <= 5) {
      let escolha = confirm('Confirma a opção escolhida?')

      if (escolha) {
        switch (opcao) {
          case 0:
            alert('Início')
            break
          case 1:
            alert('Quem somos')
            break
          case 2:
            alert('Contato')
            break
          case 3:
            alert('Comentários')
            break
          case 4:
            alert('Email')
            break
          case 5:
            alert('Encerrar')
            break
          default:
            alert('Opção inválida')
        }

        if (opcao === 5) {
          break
        }
      }
    } else {
      alert('Opção inválida. Tente novamente.')
    }
  } while (opcao !== 5)
}

menu()
