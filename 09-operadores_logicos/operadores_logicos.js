function operadores_logicos_and() {
  let value1 = true && true
  let value2 = true && false
  let value3 = false && true
  let value4 = false && false

  let test1 = 6 < 7 && 8!== 9
  let test2 = 6 > 9 && 8!== 10

  console.log(` Os valores do operador AND (&&) é: \n - Valor 1: ${value1} \n - Valor 2: ${value2} \n - Valor 3: ${value3} \n - Valor 4: ${value4} \n - Valor teste 1: ${test1} \n - Valor teste 2: ${test2} \n`)
}

function operadores_logicos_or() {
  let value1 = true || true
  let value2 = true || false
  let value3 = false || true
  let value4 = false || false

  let test1 = 6 < 7 || 8!== 9
  let test2 = 6 <= 5 || 8 == 10

  console.log(` Os valores do operador OR (||) é: \n - Valor 1: ${value1} \n - Valor 2: ${value2} \n - Valor 3: ${value3} \n - Valor 4: ${value4} \n - Valor teste 1: ${test1} \n - Valor teste 2: ${test2} \n`)
}

function operadores_logicos_not() {
  let value1 = ! 3 === 3
  let value2 = ! 10 < 1000
  let value3 = ! 9 <= 8
  let value4 = ! 10 == 10

  console.log(` Os valores do operador NOT (!) é: \n - Valor 1: ${value1} \n - Valor 2: ${value2} \n - Valor 3: ${value3} \n - Valor 4: ${value4} \n`)
}

operadores_logicos_and()
operadores_logicos_or()
operadores_logicos_not()