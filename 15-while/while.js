let velocidade = 80

while (velocidade > 0) {
  console.log(`A velocidade atual é de ${velocidade}Km/h`)
  velocidade -= 20
  console.log(`Velocidade atualizada: ${velocidade}Km/h`)

  if (velocidade === 20) {
    console.log('"Manteve a velocidade de 20Km/h"')
    break
  }
}