
let numberOne = prompt(`Insira o primeiro número:`)
let numberTwo = prompt(`Insira o segundo número:`)

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

if(numberOne == numberTwo){
  alert(`Numeros iguais`)
  }else{
    alert(`Numeros diferentes`)
  }

alert(`a soma dos dois numeros é: ${sum}`)

if(sum % 2 == 0){
    alert(`a soma dos dois numeros é par`)
  }else{
    alert(`a soma dos dois numeros é impar`)
  }

alert(`a subtração dos dois numeros é: ${sub}`)
alert(`a multiplicação dos dois numeros é: ${mult}`)
alert(`a divisão dos dois numeros é: ${div}`)
alert(`o resto da divisão dos dois numeros é: ${restDiv}`)
