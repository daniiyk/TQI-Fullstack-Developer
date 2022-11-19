//Objeto é um agrupador de valores

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //constructor é o que acontece quando uma pesso é criada
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

const daniela = new Pessoa('Daniela', 29);
const fabiane = new Pessoa('Fabiane', 31);

compararPessoas(daniela,fabiane);