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
