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

// Exercício 10
console.log('- - - - - 1 0 - - - - -')
const valorCusto = 120
const valorVenda = 160
const imposto = 20

const valorImposto = valorCusto * (imposto / 100)
const valorCustoTotal = valorCusto + valorImposto
let lucro = valorVenda - valorCustoTotal

if (valorCusto > 0 && valorVenda > 0 && imposto > 0) {
  lucro = lucro * 1000
  console.log('O valor do lucro foi: ', lucro)
}
else {
  console.log('valores menores que zero')
}

// Exercício 11 <--------
console.log(' ______11______')
const salary = 1600.00
let salaryBase
let aliquot
let tax
let takeHomeSalary

if (salary > 0 && salary <= 1556.94) {
  aliquot = salary * 0.08
}
else if (salary >= 1556.95 && salary <= 2594.92) {
  aliquot = salary * 0.09
}
else if (salary >= 2594.93 && salary <= 5189.82) {
  aliquot = salary * 0.11
}
else if (salary > 5189.82) {
  aliquot = salary - 570.88
}
else {
  console.log('Náo é um salário válido!')
}
salaryBase = salary - aliquot
console.log(salaryBase)

if (salaryBase <= 1903.98) {
  tax = 0
}
else if (salaryBase >= 1903.99 && salaryBase <= 2826.65) {
  tax = (salaryBase * 0.075) - 142.80
}
else if (salaryBase >= 2826.66 && salaryBase <= 3751.05) {
  tax = (salaryBase * 0.15) - 354.80
}
else if (salaryBase >= 3751.06 && salaryBase <= 4664.68) {
  tax = (salaryBase * 0.225) - 636.13
}
else if (salaryBase > 4664.68) {
  tax = (salaryBase * 0.275) - 869.36
}
else {
  console.log('Salário inválido!')
}
console.log(tax)
takeHomeSalary = salaryBase - tax
console.log('O salário líquido é: ', takeHomeSalary)