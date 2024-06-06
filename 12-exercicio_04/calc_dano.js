function calc_dano() {
  let person1 = prompt('Qual é o nome do atacante?')
  let person2 = prompt('Qual é o nome do defensor?')

  let ataque = parseFloat(
    prompt(`Qual é o poder de ataque do atacante ${person1}?`)
  )
  let defesa = parseFloat(
    prompt(`Qual é o poder de defesa do defensor ${person2}?`)
  )

  let escudo = confirm(`${person2} terá escudo?`)

  let batalha = ataque - defesa

  if (ataque > defesa && !escudo) {
    alert(`O dano sofrido a ${person2} foi de ${batalha}`)
  } else if (ataque > defesa && escudo) {
    alert(`O dano sofrido a ${person2} foi de ${batalha / 2}`)
  } else if (ataque <= defesa) {
    alert(`${person2} defendeu com sucesso!!`)
  } else {
    alert('Ninguem sofreu dano e nem defendeu')
  }
}

calc_dano()
