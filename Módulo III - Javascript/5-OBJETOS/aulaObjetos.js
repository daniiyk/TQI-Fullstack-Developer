//Objeto é um agrupador de valores

const pessoa = {
    nome: 'Daniela Y Kuroda',
    idade: 29,
    descrever: function () {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

/*Daniela.altura = 1.51;
delete Daniela.idade;

console.log(Daniela.nome);
console.log(Daniela.idade);
console.log(Daniela.altura);
console.log(Daniela);
*/
