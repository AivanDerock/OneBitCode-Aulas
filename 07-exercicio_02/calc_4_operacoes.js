function calc() {
  let value1 = prompt('Insira o primeiro valor:')
  let value2 = prompt('Insira o segundo valor:')

  let confirma = confirm(
    `Confirma os dados? \n Primeiro valor: ${value1} \n Segundo valor: ${value2}`
  )

  alert('Aguarde um estante... ok?')

  if (confirma) {
    setTimeout(() => {
      alert('Calculei!!!')

      let resultado = `O resultado das 4 operações são: \n
      ${value1} + ${value2} = ${parseInt(value1) + parseInt(value2)} \n
      ${value1} - ${value2} = ${parseInt(value1) - parseInt(value2)} \n
      ${value1} * ${value2} = ${parseInt(value1) * parseInt(value2)} \n
      ${value1} / ${value2} = ${parseInt(value1) / parseInt(value2)}
      `

      alert(resultado)
    }, 2000)
  } else {
    alert('Por favor, revise os dados e tente novamente.')
  }
}

calc()
