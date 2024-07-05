const consultorioMedico = () => {
  let continuar = true

  alert('Seja bem-vindo ao consultório médico!')
  let fila = ['1 Matheus', '2 Carlos', '3 João']
  alert(`Fila atual: \n${fila.join('\n')}`)

  const novoPaciente = () => {
    let adicionarPaciente = confirm('Gostaria de adicionar um novo paciente?')

    if (adicionarPaciente) {
      let nomePaciente = prompt('Qual é o nome do novo paciente?')
      if (nomePaciente) {
        fila.push(nomePaciente)
        alert(`Paciente ${nomePaciente} adicionado com sucesso!`)
        alert(`Fila atual: \n${fila.join('\n')}`)
      } else {
        alert('Por favor, informe um nome.')
      }
    }
  }

  const consultarPaciente = () => {
    if (fila.length > 0) {
      let pacienteConsultado = fila.shift()
      alert(`Paciente ${pacienteConsultado} consultado com sucesso!`)
      alert(`Fila atual: \n${fila.join('\n')}`)
    } else {
      alert('Não há pacientes na fila.')
    }
  }

  do {
    let acao = prompt(
      'Escolha uma opção: \n 1. Adicionar novo paciente \n 2. Consultar paciente \n 3. Sair'
    )

    switch (acao) {
      case '1':
        novoPaciente()
        break
      case '2':
        consultarPaciente()
        break
      case '3':
        continuar = false
        break
      default:
        alert('Opção inválida.')
    }
  } while (continuar)

  alert('Até a próxima consulta!')
}

consultorioMedico()
