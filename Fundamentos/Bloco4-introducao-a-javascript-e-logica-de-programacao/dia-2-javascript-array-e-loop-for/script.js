// Exercicios JavaScript 4.2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('- - - > Exercício 1')
for (let number of numbers) {
  console.log(number)
}

console.log('- - - > Exercício 2')
let sum = 0
for (let number of numbers) {
  sum = sum + number
}
console.log(sum)

console.log('- - - > Exercício 3')
let itemsArray = numbers.length
let median = sum / itemsArray
console.log(median)

console.log('- - - > Exercício 4')
if (median > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}

console.log('- - - > Exercício 5')
let firstIndex = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i + 1] != undefined) {
    if (firstIndex > numbers[i + 1]) {
      firstIndex = firstIndex
    }
    else {
      firstIndex = numbers[i + 1]
    }
  }
}
console.log(firstIndex)

console.log('- - - > Exercício 6')
let sumOdd = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    sumOdd = sumOdd + 1
  }
}

if (sumOdd > 0) {
  console.log('Quantidade de números ímpares no array: ', sumOdd)
}
else {
  console.log('Nenhum valor ímpar encontrado!')
}