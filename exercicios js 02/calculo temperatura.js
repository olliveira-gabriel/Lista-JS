//3) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 

let temperatura_celsius
let temperatura_fahrenheit

temperatura_celsius = Number(prompt("Digite a temperatura em Celsius"))
temperatura_fahrenheit = ((temperatura_celsius * 1.8) + 32)

alert('A temperatura em graus farenheit é ' + temperatura_fahrenheit)