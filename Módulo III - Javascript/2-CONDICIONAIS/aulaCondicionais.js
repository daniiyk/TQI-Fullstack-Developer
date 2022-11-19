/* Booleanas - True or False (0 ou 1)
> = Maior
< = Menor
>= mairo ou igual
<= menor ou igual
% = resto da divisão
= atribuição
== ignora o tipo da variavel, conversao implicita
=== mais utilizados, pois sempre olha o tipo da variavel. se for numero e for comparado com texto, ele irá retornar falso.
! Negaçao da condicional.
Temos o if simples, que só olha uma condicao
e if com else.
*/

/*const numero = 0;

const numeroPar = (numero % 2) === 0;
if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}
*/

const numero = 4;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

