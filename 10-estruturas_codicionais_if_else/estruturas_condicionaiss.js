function if_and_else() {
  
  const idade = 18
  
  if (idade > 18) {
    console.log('você é de maior...')
  } else if (idade < 18) {
    console.log('você é de menor...')
  } else if (idade === 18) {
    console.log('Exercito??')
  } else {
    console.log("você não tem idade")
  }

  const idade1 = 19


  let resultado = (idade1 > 18) ? 'Você é de maior...' : (idade1 === 18) ? 'Exercito??' : 'você é de menor...'

  console.log(resultado)
}

if_and_else()