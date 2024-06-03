function comparaçao() {
  let value1 = 3 == 3
  let value2 = 3 === '3'
  let value3 = 3 == '3'
  let value4 = 3 * 3 + 1 == 10
  let value5 = 3 != 100
  let value6 = 3 !== "100"
  let value7 = 3 > 100
  let value8 = 3 >= 100
  let value9 = 3 < 100
  let value10 = 3 <= 100

  console.log(` - Valor 1: ${value1} \n - Valor 2: ${value2} \n - Valor 3: ${value3} \n - Valor 4: ${value4} \n - Valor 5: ${value5} \n - Valor 6: ${value6} \n - Valor 7: ${value7} \n - Valor 8: ${value8} \n - Valor 9: ${value9} \n - Valor 10: ${value10}`)
}

comparaçao()