const proc_polindromo = () => {
  let continuar = true

  do {
    let palavra = prompt(`Qual palavra gostaria de procurar?`).toUpperCase()
    let invertida = ''

    for (let i = palavra.length - 1; i >= 0; i--) {
      invertida += palavra[i]
    }

    if (palavra === invertida) {
      alert(`A palavra "${palavra}" é um palíndromo!`)
    } else {
      alert(`A palavra "${palavra}" não é um palíndromo.`)
    }

    alert(
      `A palavra original foi "${palavra}" e a invertida foi "${invertida}"`
    )

    if (continuar === true) {
      continuar = confirm(`Deseja continuar procurando palíndromos?`)
    }
  } while (continuar)
}


proc_polindromo()
