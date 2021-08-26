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

// Exercício 6
const peca = 'caVALO'
const pecaXadrez = peca.toLocaleLowerCase()

if (pecaXadrez == 'cavalo') {
  console.log('movimento em L')
}
else {
  console.log('valor inválido')
}

// Exercício 7
const nota = 33

if (nota >= 90 && nota <= 100) {
  console.log('A')
}
else if (nota >= 80 && nota < 90) {
  console.log('B')
}
else if (nota >= 70 && nota < 80) {
  console.log('C')
}
else if (nota >= 60 && nota < 70) {
  console.log('D')
}
else if (nota >= 50 && nota < 60) {
  console.log('E')
}
else if (nota < 50 && nota > 0) {
  console.log('F')
}
else if (nota < 0 || nota > 100) {
  console.log('Erro do valor da nota!!')
}
else {
  console.log('Esse valor não é um número.')
}

// Exercício 8
console.log('Exercício 8 - - - ->')
const mynumber1 = 7
const mynumber2 = 10
const mynumber3 = 49

if (mynumber1 % 2 == 0 || mynumber2 % 2 == 0 || mynumber3 % 2 == 0) {
  console.log(true)
} 
else {
  console.log(false)
}

// Exercício 9
console.log('Exercício 9 - - - ->')
const mynumber4 = 22
const mynumber5 = 56
const mynumber6 = 17

if (mynumber4 % 2 != 0 || mynumber5 % 2 != 0 || mynumber6 % 2 != 0) {
  console.log(true)
} 
else {
  console.log(false)
}