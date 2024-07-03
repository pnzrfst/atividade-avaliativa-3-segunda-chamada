
import leia from "readline-sync"

/*Questão 02
Escreva um algoritmo de conversão de moedas. Você deve solicitar um valor (Exemplo: 4.15), que será em real (R$), 
ao usuário e para qual moeda converter. Após isso, o algoritmo deve converter e mostrar o valor na moeda seleciona. 
Você precisa fazer a conversão para apenas 2 moedas, Dólar e Euro. Você pode usar os seguintes valores.

Dólar = 5.66, para Euro = 6.08;

Exemplo

1 Real = 5.66 Dólar
1 Real = 6.08 Euro

var valorConversao = leia.questionFloat("digite o valor para conversao: R$");

var moedaSelecionada = leia.questionInt("deseja converter para: (1)Dolar, (2)Euro ");

switch(moedaSelecionada){
    case 1:
        var totalConversao = valorConversao / 5.66;
        if(moedaSelecionada === 1){
            moedaSelecionada = "Dolares"
        }
        console.log(`O total de R$${valorConversao.toFixed(2)} para ${moedaSelecionada} e de U$${totalConversao.toFixed(2)}`);
    break;
    case 2:
        var totalConversao = valorConversao / 6.08;
        if(moedaSelecionada === 2){
            moedaSelecionada = "Euros"
        }
        console.log(`O total de R$${valorConversao.toFixed(2)} para ${moedaSelecionada} e de €${totalConversao.toFixed(2)}`);
    break;
    default:
        console.log("informe uma moeda valida.")
    
}*/