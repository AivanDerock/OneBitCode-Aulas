const cadImovel = () => {
  let continuar = true
  alert('Seja bem-vindo ao Cadastro de imóveis!!')

  let imoveis = []

  const cadastro = () => {
    alert(
      'Aqui damos início ao cadastro. Por favor, preencha as seguintes perguntas.'
    )
    let prop = prompt('Informe o nome do proprietário: ')
    let qtdQuarto = prompt('Quantos quartos possui o imóvel?')
    let qtdBanheiro = prompt('Quantos banheiros há nesse imóvel?')
    let garagem = confirm('O imóvel possui garagem?')
    let salvar = confirm(
      `Os dados fornecidos estão corretos? \n Revise os dados: \n - Proprietário: ${prop}; \n - Quartos: ${qtdQuarto}; \n - Banheiros: ${qtdBanheiro}; \n - Garagem: ${
        garagem ? 'Sim' : 'Não'
      }`
    )

    if (salvar) {
      alert('Informações salvas com sucesso!!!')
      let user = { prop, qtdQuarto, qtdBanheiro, garagem }
      imoveis.push(user)
    } else {
      alert('[ERROR] Faltam dados ou dados incorretos.')
    }
  }

  const consultar = () => {
    let nomeUser = prompt(
      'Aqui vamos consultar os imóveis com base no nome do proprietário. Por favor, informe-o: '
    )

    let encontrado = imoveis.find(imovel => imovel.prop === nomeUser)

    if (encontrado) {
      alert(
        `Imóvel encontrado: \n - Proprietário: ${
          encontrado.prop
        }; \n - Quartos: ${encontrado.qtdQuarto}; \n - Banheiros: ${
          encontrado.qtdBanheiro
        }; \n - Garagem: ${encontrado.garagem ? 'Sim' : 'Não'}`
      )
    } else {
      alert('Imóvel não encontrado.')
    }

    let consultarOutro = confirm('Gostaria de consultar outro?')
    if (consultarOutro) {
      consultar()
    }
  }

  do {
    let menu = prompt(
      'Aqui é onde damos início. Por favor escolha uma das opções: \n 1 - Cadastrar \n 2 - Consultar \n 3 - Sair'
    )

    switch (menu) {
      case '1':
        cadastro()
        break
      case '2':
        consultar()
        break
      case '3':
        continuar = false
        break
      default:
        alert('Opção inválida.')
    }
  } while (continuar)

  alert('Até a próxima!')
}

cadImovel()
