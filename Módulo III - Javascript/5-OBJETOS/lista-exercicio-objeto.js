/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilömetro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos de o valor 
    gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPoKm;

    constructor (marca, cor, gastoMedioPoKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPoKm = gastoMedioPoKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPoKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat','Prata', 1 / 12);
const fordKa = new Carro('Ford','Prata', 1/ 10);
console.log(uno.calcularGastoDePercurso(70,5));
console.log(fordKa.calcularGastoDePercurso(70,5));