console.log('F U N C T I O N - - - - > Exercício 1 < - - - - ')
function palindrome(paramString) {
  let textLowerCase = paramString.toLocaleUpperCase()
  let stringReverse = textLowerCase.split('').reverse().join('')
  if (stringReverse === textLowerCase) {
    return true
  }
  else {
    return false
  }
}
console.log(palindrome('Reler'))

console.log('F U N C T I O N - - - - > Exercício 2 < - - - - ')
function maxValue(paramArray) {
  let arrayIndex = 0;
  for (let i = 0; i < paramArray.length; i += 1) {
    if (paramArray[arrayIndex] < paramArray[i]) {
      arrayIndex = i;
    }
  }
  return arrayIndex;
}
console.log(maxValue([2, 3, 6, 7, 10, 1]))

console.log('F U N C T I O N - - - - > Exercício 3 < - - - - ')
function minValue(paramArray) {
  let arrayIndex = 0;
  for (let i = 0; i < paramArray.length; i += 1) {
    if (paramArray[arrayIndex] > paramArray[i]) {
      arrayIndex = i;
    }
  }
  console.log(arrayIndex)
  return arrayIndex;
}
minValue([2, 4, 6, 7, 10, 0, -3])