const list_stores = () => {
  const list = []

  list.push('Arroz')
  list.push('Feijão')
  list.push('Macarrão')
  list.push('Sal')

  list[4] = 'Batata'
  list[5] = 'Tomate'

  console.log(list[3])
  console.log(list)

  list.pop('Tomate')
  console.log(list)

}

list_stores()