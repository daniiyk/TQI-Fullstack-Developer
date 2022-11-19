/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combusstível do carro por KM;
    5 - Distância em KM da viagem;

Imprimir no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distancia / kmPorLitros;


if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
console.log('O carro é etanol e valor gasto é', valorGasto)
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
console.log('O carro é etanol e valor gasto é', valorGasto)

}
