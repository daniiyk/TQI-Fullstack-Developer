/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de pese de uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dados o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adulto condição:
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso Normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obesidade Grave.
*/

const peso = 91;
const altura = 1.50;
//Para utilizar exponencial, o comando é math.pow(altura, 2);
const IMC = peso / (altura * altura);

console.log(IMC);

    if (IMC < 18.5) {
        console.log('Abaixo do peso');
    } else if (IMC >= 18.5 && IMC < 25) {
        console.log('Peso normal');
    } else if (IMC >= 25 && IMC < 30) {
        console.log('Acima do peso');
    } else if (IMC >= 30 && IMC < 40) {
        console.log('Obeso');
    } else if (IMC > 40) {
        console.log('Obesidade Grave');
    }