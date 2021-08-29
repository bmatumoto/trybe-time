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