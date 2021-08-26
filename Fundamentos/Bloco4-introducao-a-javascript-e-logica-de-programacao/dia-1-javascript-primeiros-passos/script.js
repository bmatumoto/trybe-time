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

// Exercício 5
const angle1 = 80
const angle2 = 70
const angle3 = -2

if (angle1 + angle2 + angle3 === 180) {
  console.log(true)
}
else if (angle1 < 0 || angle2 < 0 || angle3 < 0 ) {
  console.warn('Não é um número válido')
}
else {
  console.log(false)
}