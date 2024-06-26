const robo_tabuada = () => {
  let num = Number(prompt('Qual a tabuada que deseja calcular??'))
  let tabuada = ''

  for (let i = 1; i <= 10; i++) {
    tabuada += `${num} X ${i} = ${num * i} \n`
    alert(`A tabuada de ${num} é: \n ${tabuada}`)
  }
}

robo_tabuada()