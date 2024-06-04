function vel() {
  let car1 = prompt('Qual o modelo (nome) do seu primeiro carro?')
  let car2 = prompt('Qual o modelo (nome) do seu segundo carro?')

  let vel1 = prompt(`Qual a velocidade do ${car1}?`)
  let vel2 = prompt(`Qual a velocidade do ${car2}?`)

  let confirma = confirm(`Confirma os dados? \n
  - Carro 1: ${car1} | - Velocidade: ${vel1}Km/h \n
  - Carro 2: ${car2} | - Velocidade: ${vel2}Km/h`)

  setTimeout(() => {
    if (confirma) {
      alert('- Velocidade calculada com sucesso!')
    } else {
      alert('Por favor, revise os dados e tente novamente. ')
    }
    if (vel1 > vel2) {
      alert(`- ${car1} foi mais veloz que ${car2}`)
    } else if (vel1 < vel2) {
      alert(`- ${car2} foi mais veloz que ${car1}`)
    } else {
      alert(`- ${car1} e ${car2} estão com a mesma velocidade`)
    }
  }, 2000)
}

vel()
