// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número encontrado.

const listaDeNumero = [1, 3, 4, 8, 10, 11, 15, 17, 18, 21];

for (let i = 0; i < listaDeNumero.length; i++) {
    const numero = listaDeNumero[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }

}