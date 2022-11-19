

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distancia = 1580;

let valorViagem = (distancia / kmPorLitros) * precoCombustivel;

console.log('Valor gasto na viagem é de ', valorViagem.toFixed(2));