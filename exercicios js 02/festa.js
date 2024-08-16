//7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

let qtd_chopp_total = 300
var qtd_pessoas
var qtd_consumida
var qtd_desperdiçada 
var qtd_sobra 
var qtd_chopp
var qtd_media

qtd_pessoas = Number(prompt("Digite a quantidade de pessoas que foram a festa"))
qtd_consumida = Number(prompt("Digite a quantidade de chopp consumido (em Litros)"))
qtd_desperdiçada = Number(prompt("Digite a quantidade de chopp que foi desperdiçada (em Litros), senão foi desperdiçado nada digitar '0' "))
qtd_sobra = Number(prompt("Digite a quantidade de chopp que sobrou (em Litros), senão sobrou nada, digitar '0' "))

qtd_chopp = (qtd_consumida + qtd_desperdiçada + qtd_sobra)

qtd_media = (qtd_chopp_total - qtd_chopp) / qtd_pessoas

alert(`A média de litros bebidos por pessoa é ${qtd_media}`)


