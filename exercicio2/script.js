// Exercício 2

let randomNumber1 = Number(prompt("Insira um número aleatório"))
let randomNumber2 = Number(prompt("Insira outro número aleatório"))
let answer

/*
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true
*/

answer = randomNumber1 > randomNumber2
console.log("O primeiro número inserido é maior que o segundo?", answer)

answer = randomNumber1 === randomNumber2
console.log("O primeiro número inserido é igual ao segundo?", answer)

answer = (randomNumber1 % randomNumber2) === 0
console.log("O primeiro número inserido é divisível pelo segundo?", answer)

answer = (randomNumber2 % randomNumber1) === 0
console.log("O segundo número inserido é divisível pelo primeiro?", answer)