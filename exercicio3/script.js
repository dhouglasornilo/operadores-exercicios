// Exercício 3 - Parte 1

/* Escreva as operações lógicas abaixo em formato de código.
Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;
b) 5 é igual a 5 ou é igual a “5”;
c) negação de (vinte é maior que cinquenta)
d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) */

const letterA = (5 > 20) && (5 < 2)
console.log ("5 é maior que 20 e também é menor que 2:", letterA)

const letterB = (5 === 5) || (5 === "5")
console.log ('5 é igual a 5 ou é igual a "5":', letterB)

const letterC = !(20 > 50)
console.log ("20 não é maior que 50:", letterC)

const letterD = !((20 > 50) || (50 > 60))
console.log ("20 não é maior que 50 ou 50 não é maior que 60:", letterD )

// Parte 2

/* O funcionário Fulano de Silva, com CPF: 000.000.000-00,
nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos.
Possui habilitação? Sim. Ocupa o cargo de vendedor,
recebe um salário de 2.000,00 reais, mais comissão de 10% sobre
o total de vendas no mês e entrou na empresa em 2019. */

let nomeCompleto = prompt("Nome Completo:")
let dataNascimento = prompt("Data de nascimento: (utilize as / )")
let endereco = prompt("Endereço:")
let cpf = Number(prompt("CPF:"))
let escolaridade = prompt("Escolaridade:")
let cnh = prompt("Possui CHN?")
let filhos = Number(prompt("Quantos filhos possui?"))
let cargoAtual = prompt("Cargo atual:")
let salarioFixo = Number(prompt("Salário fixo:"))
let comissao = Number(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
let admissao = Number(prompt("Informe o ano de admissão:"))

console.log("Nome Completo: " + nomeCompleto)
console.log("Data de Nascimento: " + dataNascimento)
console.log("Endereço: " + endereco)
console.log("CPF: " + cpf)
console.log("Escolaridade: " + escolaridade)
console.log("Possui CNH? " + cnh)
console.log("Quantos filhos? " + filhos)
console.log("Cargo Atual: " + cargoAtual)
console.log("Salário: " + salarioFixo)
console.log("Comissão: " + comissao)
console.log("Ano de admissão: " + admissao)

/* Calcule o salário de Fulano da Silva levando em consideração
os dados que se seguem:

a) Auxílio creche por filho:  R$45,50
b) Comissão de 10% sobre o total de vendas mensal
c) Total de vendas dos meses de janeiro a junho:
    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário */

// Calcule:

// 1) O salário fixo mais o auxílio creche

let auxCreche = 45.50*filhos

let salarioComAuxCreche = salarioFixo + auxCreche
console.log ('Olá!',nomeCompleto,'. Seu salário fixo mais o auxílio creche é de: R$', salarioComAuxCreche)

/* 2) Quanto Fulano da Silva receberá de comissão em Janeiro
(dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2) */ 

let comissaoJan = ((comissao * 5784.50) / 100)
let comissaoFev = ((comissao * 3418.41) / 100)
let comissaoMar = ((comissao * 4124.10) / 100)
let comissaoAbr = ((comissao * 1874) / 100)
let comissaoMai = ((comissao * 7000) / 100)
let comissaoJun = ((comissao * 9450) / 100)

console.log ('A comissão que',nomeCompleto,'receberá de Janeiro será de: R$', comissaoJan)

/* 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS
( o valor a ser calculado deve levar em consideração
o salário + porcentagem de vendas.) */

let descInss = 0.05

let descInssJan = ((salarioComAuxCreche + comissaoJan) * descInss)
let descInssFev = ((salarioComAuxCreche + comissaoFev) * descInss)
let descInssMar = ((salarioComAuxCreche + comissaoMar) * descInss)
let descInssAbr = ((salarioComAuxCreche + comissaoAbr) * descInss)
let descInssMai = ((salarioComAuxCreche + comissaoMai) * descInss)
let descInssJun = ((salarioComAuxCreche + comissaoJun) * descInss)

console.log ('O valor descontado pelo INSS em Janeiro do salario de',nomeCompleto,'será de: R$', descInssJan)

/* 4) Imprima no console o cálculo do salário de
todos os meses com acréscimos e descontos. */

let salarioJanBruto = (salarioComAuxCreche+comissaoJan)
let salarioJanLiquido = ((salarioComAuxCreche+comissaoJan)-descInssJan)

let salarioFevBruto = (salarioComAuxCreche+comissaoFev)
let salarioFevLiquido = ((salarioComAuxCreche+comissaoFev)-descInssFev)

let salarioMarBruto = (salarioComAuxCreche+comissaoMar)
let salarioMarLiquido = ((salarioComAuxCreche+comissaoMar)-descInssMar)

let salarioAbrBruto = (salarioComAuxCreche+comissaoAbr)
let salarioAbrLiquido = ((salarioComAuxCreche+comissaoAbr)-descInssAbr)

let salarioMaiBruto = (salarioComAuxCreche+comissaoMai)
let salarioMaiLiquido = ((salarioComAuxCreche+comissaoMai)-descInssMai)

let salarioJunBruto = (salarioComAuxCreche+comissaoJun)
let salarioJunLiquido = ((salarioComAuxCreche+comissaoJun)-descInssJun)


console.log ('O salário bruto de',nomeCompleto,'no mês de Janeiro será:',salarioJanBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Janeiro será:',salarioJanLiquido)

console.log ('O salário bruto de',nomeCompleto,'no mês de Fevereiro será:',salarioFevBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Fevereiro será:',salarioFevLiquido)

console.log ('O salário bruto de',nomeCompleto,'no mês de Março será:',salarioMarBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Março será:',salarioMarLiquido)

console.log ('O salário bruto de',nomeCompleto,'no mês de Abril será:',salarioAbrBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Abril será:',salarioAbrLiquido)

console.log ('O salário bruto de',nomeCompleto,'no mês de Maio será:',salarioMaiBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Maio será:',salarioMaiLiquido)

console.log ('O salário bruto de',nomeCompleto,'no mês de Junho será:',salarioJunBruto)
console.log ('O salário liquido de',nomeCompleto,'no mês de Junho será:',salarioJunLiquido)

/* 5) A média do salário em seis meses (de janeiro a junho),
levando em consideração as comissões e auxílio. */

let quantMeses = 6
let mediaSalarialBruta = ((salarioJanBruto+salarioFevBruto+salarioMarBruto+salarioAbrBruto+salarioMaiBruto+salarioJunBruto)/quantMeses)
console.log ('A média salarial bruta dos seis meses de',nomeCompleto,'é de:',mediaSalarialBruta)
/* ( Dica: a média aritmética é calculada somando um grupo de
números e dividindo pela quantidade de elementos  somados.
Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */

