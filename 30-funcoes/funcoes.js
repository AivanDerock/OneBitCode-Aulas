let sole = console.log
const funcao = x => {
  sole(`O dobro de ${x} é: ${x * 2}`)
}

funcao(5)

const funcao2 = name => {
  sole(`Olá, ${name}!!`)
}

funcao2('Ivan')

const funcao3 = (a, b) => {
  sole(`O Resultado de ${a} + ${b} é: ${a + b}`)
}

funcao3(7, 3)

const funcao4 = (a, b, c, d, e) => {
  sole(
    `O Resultado de ${a} + ${b} - ${c} * ${d} / ${e} é: ${a + b - (c * d) / e}`
  )
}

funcao4(2, 1, 2, 5, 2)

const funcao5 = (name, email, password, type) => {
  const user = {
    name,
    email,
    password,
    type
  }
  sole(user)
}

funcao5('Ivan', 'Ivan@gmail', 'Ivan12345.', 'ADM')

const funcao6 = () => {
  const criarUser = usuario => {
    usuario.name
    usuario.email
    usuario.address
    usuario.password
  }

  const dados = {
    name: 'Ivan',
    email: 'Ivan@gmail.com',
    address: 'Rua JJ City',
    password: '12345'
  }

  criarUser(dados)
}

funcao6()