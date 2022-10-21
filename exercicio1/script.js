// Exercício 1

/* a) */ let randomEvenNumber = Number(prompt("Insira um número par"))
console.log ("Seu número escolhido foi:", randomEvenNumber)

/* b) */ randomEvenNumber = randomEvenNumber % 2
console.log ("O restante da divisão é:", randomEvenNumber)

/* c) O exercício pede para que seja inserido apenas números pares que serão
divididos por 2, com isso, sempre o restante da divisão será = 0. */

/* d) Caso o usuário digite um número ímpar no lugar de um número par,
o restante da divisão será sempre = 1. */

/* dica de conferencia do tipo */ console.log (typeof randomEvenNumber)