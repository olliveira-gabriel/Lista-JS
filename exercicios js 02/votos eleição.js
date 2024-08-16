// 4) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 


let candidatoX
let candidatoY
let votos_branco
let votos_nulos
let total_eleitores
let percentual_candidatoX
let percentual_candidatoY
let percentual_brancos
let percentual_nulos

candidatoX = Number(prompt("Digite o número de pessoas que votaram no candidato X "))
candidatoY = Number(prompt("Digite o número de pessoas que votaram no candidato y "))
votos_branco = Number(prompt("Digite o número de pessoas que votaram em branco "))
votos_nulos = Number(prompt("Digite o número de pessoas que votaram em nulos "))
 
total_eleitores = (candidatoX + candidatoY + votos_branco + votos_nulos)

percentual_candidatoX = ((total_eleitores * candidatoX) / 100)
percentual_candidatoY = ((total_eleitores * candidatoY) / 100)
percentual_brancos = ((total_eleitores * votos_branco) / 100)
percentual_nulos= ((total_eleitores * votos_nulos) / 100)



alert(` Total eleitores: ${total_eleitores} \npercentual do candidato X: ${percentual_candidatoX}% \npercentual candidato Y: ${percentual_candidatoY}%\npercentual votos em branco: ${percentual_brancos}% \npercentual votos nulos: ${percentual_nulos}%`)

