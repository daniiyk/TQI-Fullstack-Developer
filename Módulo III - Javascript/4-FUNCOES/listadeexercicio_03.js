/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento;
   1 - À vista Débito, recebe 10% de desconto;
   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, preço normal da etiqueta sem juros;
   4 - Acima de duas vezes, preço normal da etiqueta mias juros de 10%;
*/

//criado 2 funçoes para aplicar desconto e aplicar juros.
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarTaxas(valor, taxas) {
    return (valor + (valor * (taxas / 100)));
}
const precoEtiqueta = 100;
const formaPagamento = 2;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta,10));

} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta,15));

} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);

} else  {
    console.log(aplicarTaxas(precoEtiqueta, 10));

}