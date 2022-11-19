/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) /3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre.
    */

    const nota1 = 7;
    const nota2 = 7;
    const nota3 = 8;
    const mediaAluno = (nota1 + nota2+ nota3) / 3;
    
    console.log('A média do aluno é de: ', mediaAluno);
    //Ou podemos utilizar a expressão && que é para adicionar outra condição no if.
    //Exemplo: mediaAluno >= 5 && mediaAluno <= 7
    if (mediaAluno < 5) {
        console.log('Aluno Reprovado');
    }
    if (mediaAluno > 7) {
        console.log('Aluno Aprovado');
    } else {
        console.log('Aluno de Recuperação');
    }