
import leia from "readline-sync"

/*Questão 05
Você deve desenvolver um algoritmo de uma calculadora de juros simples de empréstimo. 
Você deve solicitar ao usuário a valor do empréstimo, a quantidade de anos do empréstimo e a taxa de juros. 
Ao final, você deve informar o valor do juros e o valor total a ser pago no empréstimo. A formula para o calculo é o seguinte:

VALOR JUROS = EMPRÉSTIMO x TEMPO x TAXA JUROS

VALOR TOTAL EMPRÉSTIMO = EMPRÉSTIMO + VALOR JUROS*/

var valorEmprestimo = leia.questionFloat("insira o valor que deseja pegar emprestado: R$");

var anosPagar = leia.questionInt("insira em quantos anos voce quer pagar: ");

var taxaJuros = leia.questionInt("insira a taxa de juros selecionada: [1](10% ao ano), [2](20% ao ano)");

var valorJuros

switch(taxaJuros){
    case 1:
        var valorJuros = valorEmprestimo * anosPagar * (10 / 100);
    break;
    case 2:
        var valorJuros = valorEmprestimo * anosPagar * (20 / 100);
    break;
    default:
        console.log("insira uma taxa valida.")
}


var valorTotalEmprestimo = valorEmprestimo + valorJuros;

console.log(`o total a ser pago será de R$ ${valorTotalEmprestimo.toFixed(3)}`)
console.log(`e o total de juros do emprestimo (em R$) foi de ${valorJuros.toFixed(3)} reais.`); 