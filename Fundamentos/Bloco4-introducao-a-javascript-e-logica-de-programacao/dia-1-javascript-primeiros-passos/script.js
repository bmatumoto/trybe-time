const a = 3
const b = 2
const c = 1

const soma = a + b
console.log('valor da soma: ', soma)

const subtracao = a - b
console.log('valor da subtração: ', subtracao)

const multiplicacao = a * b
console.log('valor da multiplicação: ', multiplicacao)

const divisao = a / b
console.log('valor da divisão: ', divisao)

const modulo = a % b
console.log('valor do modulo: ', modulo)

// Exercício 2
if (a > b) {
  console.log(a)
}
else if (a < b) {
  console.log(b)
}
else {
  console.log('valores iguais')
}

// Exercício 3
if (a > b && a > c) {
  console.log(a)
}
else if (b > a && b > c) {
  console.log(b)
}
else {
  console.log(c)
}

// Exercício 4
if (a > 0) {
  console.log('positive')
}
else if (a < 0) {
  console.log('negative')
}
else {
  console.log('valor igual a zero')
}