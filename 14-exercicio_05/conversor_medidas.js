function conv_medidas() {
  let continuar = true

  while (continuar) {
    let valor = parseFloat(prompt('Insira o valor desejado em metros:'))

    let escolha =
      prompt(`Escolha entre uma das unidades de medida: (Digite apenas a sigla!) \n
    - milímetro (mm) \n
    - centímetro (cm) \n
    - decímetro (dm) \n
    - decâmetro (dam) \n
    - hectômetro (hm) \n
    - quilômetro (km)`)

    switch (escolha) {
      case 'mm':
        alert(`${valor} metros em milímetros é igual a ${valor * 1000}mm`)
        break

      case 'cm':
        alert(`${valor} metros em centímetros é igual a ${valor * 100}cm`)
        break

      case 'dm':
        alert(`${valor} metros em decímetros é igual a ${valor * 10}dm`)
        break

      case 'dam':
        alert(`${valor} metros em decâmetros é igual a ${valor / 10}dam`)
        break

      case 'hm':
        alert(`${valor} metros em hectômetros é igual a ${valor / 100}hm`)
        break

      case 'km':
        alert(`${valor} metros em quilômetros é igual a ${valor / 1000}km`)
        break

      default:
        alert('Opção inválida')
    }

    continuar = confirm('Deseja fazer outro cálculo?')
  }
}

conv_medidas()
