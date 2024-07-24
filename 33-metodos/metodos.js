let eu = {
  nome: 'Ivan',
  idade: 18,
  profissao() {
    console.log(`Auxiliar de opercaçoes!! Profissao de ${this.nome}`)
  }
}

console.log(eu)
eu.profissao()