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

const daniela = new Pessoa('Daniela', 29);
const fabiane = new Pessoa('Fabiane', 31);


daniela.descrever();
fabiane.descrever();

console.log(daniela);