const calcGeo = () => {
  let continuar = true

  const tri = () => {
    let base = parseFloat(prompt('Por favor, informe o valor da base:'))
    let altura = parseFloat(prompt('Agora, informe o valor da altura:'))

    alert(`O cálculo do triângulo é: ${(base * altura) / 2}`)
  }

  const ret = () => {
    let base = parseFloat(prompt('Por favor, informe o valor da base:'))
    let altura = parseFloat(prompt('Agora, informe o valor da altura:'))

    alert(`O cálculo do retângulo é: ${base * altura}`)
  }

  const qua = () => {
    let lado = parseFloat(prompt('Por favor, informe o valor do lado:'))

    alert(`O cálculo do quadrado é: ${lado * lado}`)
  }

  const tra = () => {
    let baseMaior = parseFloat(
      prompt('Por favor, informe o valor da base maior:')
    )
    let baseMenor = parseFloat(prompt('Agora, informe o valor da base menor:'))
    let altura = parseFloat(prompt('Por fim, informe o valor da altura:'))

    alert(`O cálculo do trapézio é: ${((baseMaior + baseMenor) * altura) / 2}`)
  }

  const cir = () => {
    let pi = 3.14
    let raio = parseFloat(prompt('Por favor, informe o raio:'))

    alert(`O cálculo do círculo é: ${pi * (raio * raio)}`)
  }

  do {
    let menu = prompt(
      'Seja bem-vindo(a) ao CalcGeo. Onde podemos fazer cálculos de formas geométricas!! Para dar início, escolha uma das opções a seguir: \n1. Triângulo \n2. Retângulo \n3. Quadrado \n4. Trapézio \n5. Círculo \n6. Sair'
    )

    switch (menu) {
      case '1':
        tri()
        break
      case '2':
        ret()
        break
      case '3':
        qua()
        break
      case '4':
        tra()
        break
      case '5':
        cir()
        break
      case '6':
        continuar = false
        break
      default:
        alert('Opção inválida.')
    }
  } while (continuar)

  alert('Até a próxima!!')
}

calcGeo()
