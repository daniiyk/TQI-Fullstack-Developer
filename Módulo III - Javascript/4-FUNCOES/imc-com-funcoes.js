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

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else if (imc > 40) {
        return 'Obesidade Grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;
    //Para utilizar exponencial, o comando é math.pow(altura, 2);
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    
}

main();

