const siteVagas = () => {
  let continuar = true
  const vagas = [
    { nome: 'Auxiliar de Logística', inscritos: 10, candidatos: [] },
    { nome: 'Operador de Empilhadeira', inscritos: 5, candidatos: [] },
    { nome: 'Almoxarifado', inscritos: 2, candidatos: [] },
    { nome: 'Auxiliar de Qualidade', inscritos: 7, candidatos: [] }
  ]

  const vagasDispon = () => {
    const listarVagas = () => {
      vagas.forEach((vaga, indice) => {
        alert(` - ${indice}. Nome: ${vaga.nome}, Inscritos: ${vaga.inscritos}`)
      })
    }

    listarVagas()
  }

  const criarVaga = () => {
    let nomeVaga = prompt('Qual é o nome da vaga?')
    let descricaoVaga = prompt('Qual é a descrição da vaga?')
    let dataLimite = prompt('Digite a data limite (ex: AAAA-MM-DD):')

    let confirmacao = confirm(
      `Por favor, confirme os dados: \n - Nome: ${nomeVaga}; \n - Descrição: ${descricaoVaga}; \n - Data: ${dataLimite}`
    )

    if (confirmacao) {
      const novaVaga = {
        nome: nomeVaga,
        descricao: descricaoVaga,
        dataLimite: dataLimite,
        inscritos: 0,
        candidatos: []
      }
      vagas.push(novaVaga)
      alert('Vaga criada com sucesso!')
    } else {
      alert('Criação da vaga cancelada!')
    }
  }

  const vizuVaga = () => {
    let indice = parseInt(
      prompt('Digite o índice da vaga que deseja visualizar:')
    )
    if (indice >= 0 && indice < vagas.length) {
      const vaga = vagas[indice]

      alert(
        `- Índice: ${indice}\n - Nome: ${vaga.nome}\n - Descrição: ${
          vaga.descricao
        }\n - Data Limite: ${vaga.dataLimite}\n - Qtd Candidatos: ${
          vaga.inscritos
        }\n - Candidatos: ${vaga.candidatos.join(', ')}`
      )
    } else {
      alert('Índice inválido.')
    }
  }

  const inscreCandidato = () => {
    let nomeCandidato = prompt('Por favor, informe o nome do candidato:')
    let indiceVaga = parseInt(
      prompt('Digite o índice da vaga para inscrever o candidato:')
    )

    if (indiceVaga >= 0 && indiceVaga < vagas.length) {
      const vaga = vagas[indiceVaga]
      let confirmacao = confirm(
        `Por favor, confirme os dados: \n - Nome do Candidato: ${nomeCandidato} \n - Índice da Vaga: ${indiceVaga} \n - Nome da Vaga: ${
          vaga.nome
        } \n - Descrição: ${vaga.descricao} \n - Data Limite: ${
          vaga.dataLimite
        } \n - Qtd Candidatos: ${
          vaga.inscritos
        } \n - Candidatos atuais: ${vaga.candidatos.join(', ')}`
      )

      if (confirmacao) {
        vaga.candidatos.push(nomeCandidato)
        vaga.inscritos += 1
        alert('Candidato inscrito com sucesso!')
      } else {
        alert('Inscrição de candidato cancelada.')
      }
    } else {
      alert('Índice da vaga inválido!')
    }
  }

  const excluirVaga = () => {
    let indice = parseInt(prompt('Digite o índice da vaga que deseja excluir:'))
    if (indice >= 0 && indice < vagas.length) {
      vagas.splice(indice, 1)
      alert('Vaga excluída com sucesso!')
    } else {
      alert('Índice da vaga inválido!')
    }
  }

  do {
    const menu = prompt(`
      Seja bem-vindo(a) ao site Vagas.com. \n Aqui vamos listar todas as vagas disponíveis. \n Escolha uma das opções: \n 1. Vagas Disponíveis \n 2. Criar Vaga \n 3. Visualizar Vaga \n 4. Inscrever Candidato \n 5. Excluir Vaga \n 6. Sair`)

    switch (menu) {
      case '1':
        vagasDispon()
        break
      case '2':
        criarVaga()
        break
      case '3':
        vizuVaga()
        break
      case '4':
        inscreCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        continuar = false
        break
      default:
        alert('Opção inválida.')
    }
  } while (continuar)

  alert('Boa sorte!!!')
}

siteVagas()