//2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

let ano_nascimento
let ano_atual
let calculo_idade


ano_nascimento = Number(prompt("Digite o ano que você nasceu(YYYY)"))
ano_atual = Number(prompt("Digite o ano que você está(YYYY)"))

calculo_idade = (ano_atual - ano_nascimento)

alert("você tem " + calculo_idade + " anos")

