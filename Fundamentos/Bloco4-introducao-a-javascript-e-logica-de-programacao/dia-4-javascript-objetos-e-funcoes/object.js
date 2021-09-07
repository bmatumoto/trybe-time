let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('TRYBE TIMEE! - - - - > Exercício 1 < - - - - ')
console.log('Bem-vinda, ' + info['personagem'])

console.log('TRYBE TIMEE! - - - - > Exercício 2 < - - - - ')
info['recorrente'] = 'Sim'
console.log(info)

console.log('TRYBE TIMEE! - - - - > Exercício 3 < - - - - ')
for (let key in info) {
  console.log(key)
}

console.log('TRYBE TIMEE! - - - - > Exercício 4 < - - - - ')
for (let key in info) {
  console.log(info[key])
}

console.log('TRYBE TIMEE! - - - - > Exercício 5 < - - - - ')
let infoDonald = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (info[key] === infoDonald[key]) {
    console.log('Ambos recorrentes')
  }
  else {
    console.log(info[key] + ' e ' + infoDonald[key])
  }
}