const arrays_bid = () => {
  const arr = [
    '1 Nível',
    ['2 Nível', 24, true],
    [
      ['3 Nível', 'Ivan', 'Ana'],
      ['3 Nível', 'Ana', 'Ivan']
    ],
    []
  ]

  console.log(arr)
  console.log(arr[0])
  console.log(arr[1][0])
  console.log(arr[2][1][2])

  console.log('......................................................')

  const matriz = [
    ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
    ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4'],
    ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4']
  ]

  console.table(matriz)

  matriz[0].push(['l1, c5'])
  matriz[1].push(['l2, c5'])
  matriz[2].push(['l3, c5'])
  console.table(matriz)
}

arrays_bid()
