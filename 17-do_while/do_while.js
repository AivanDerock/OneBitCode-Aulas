function do_while() {
  let veloc = 0

  do {
    console.log(`A velocidade do veiculo é de ${veloc}Km/h`)
    veloc -= 20
  } while (veloc > 0)

  console.log(`Velocidade final é de ${veloc}Km/h`)
}

do_while()