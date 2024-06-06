function calc_dano() {
  let person1 = prompt('Qual é o nome do atacante?')
  let person2 = prompt('Qual é o nome do defensor?')

  let ataque = prompt(`Qual é o poder de ataque do atacante ${person1}?`)
  let defesa = prompt(`Qual é o poder de defesa do defensor ${person2}?`)

  let escudo = confirm(`${person2} terá escudo?`)

  let batalha = ataque - defesa

  if (ataque > defesa && !escudo) {
    alert(`O dano sofrido a ${person2} foi de ${batalha}`)
  } else if (ataque < defesa && !escudo) {
    dano = ataque / 2
    alert(`O ${person2} defendeu com sucesso!`)
  } else if (ataque == defesa) {
    alert(`${person1} e ${person2} não sofreram dano!`)
  } else {
    alert('Ninguem sofreu dano e nem defendeu')
  }
}

calc_dano()
