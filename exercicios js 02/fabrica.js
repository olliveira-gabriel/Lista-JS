//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 


var qtd_plastico
var qtd_papel
var qtd_metal
var valor_plastico
var valor_papel
var valor_metal
var valor_total


qtd_plastico = Number(prompt("Digite a quantidade de plástico(em kg)"))
qtd_papel = Number(prompt("Digite a quantidade de papel(em kg)"))
qtd_metal = Number(prompt("Digite a quantidade de metal(em kg)"))

valor_plastico = ((qtd_plastico / 10) * 2 )
valor_papel= ((qtd_papel / 30) * 3 )
valor_metal= ((qtd_metal/ 50) * 5 )
valor_total = (valor_plastico + valor_papel + valor_metal)

alert(`O valor que será recebido:\n Plástico: ${valor_plastico}R$\n Papel: ${valor_papel}R$\n Metal: ${valor_metal}R$\n Valor Total: ${valor_total}R$`)

