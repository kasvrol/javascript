const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
};

// Método substring [.substring(a, b)]: permite percorrer uma string e capturar os elementos da primeira posição (a) até uma posição antes do segundo número (b).
console.log(cliente.cpf.substring(0, 3));

//---------------------------------------------------------------------------------------------------------------------------------------------------

const chaves = ["nome", "idade", "cpf", "email"];

// Método acessar objeto através da um array
// imprime a posição do array que é identica a posição do objeto
console.log(cliente[chaves[0]]);

// Método acessar objeto através da um array
// imprime a posição do array que é identica a posição do objeto, nesse caso o objeto inteiro
chaves.forEach((info) => console.log(cliente[info]));

// Método acessar objeto através da um array
// imprime o valor do objeto que seja identico ao requesitado
console.log(cliente["nome"]);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

const cliente2 = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    dependentes: [
        {
            nome: "Samira Mariazinha",
            parentesco: "filha",
            dataNasc: "04/01/2013",
        },
        {
            nome: "Samila Mariquinha",
            parentesco: "filha",
            dataNasc: "04/01/2012",
        },
        { nome: "Samia Maria", parentesco: "filha", dataNasc: "04/01/2014" },
    ],
};

const filhaMaisNova = cliente2.dependentes.filter(
    (dependente) => dependente.dataNasc === "04/01/2014"
);

//Método de acessopor filtro
console.log(filhaMaisNova[0].nome);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Método de inserção de informação

const cliente3 = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    dependentes: [
        {
            nome: "Samira Mariazinha",
            parentesco: "filha",
            dataNasc: "04/01/2013",
        },
        {
            nome: "Samila Mariquinha",
            parentesco: "filha",
            dataNasc: "04/01/2012",
        },
    ],
};

cliente3.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014",
});

console.log(cliente3.dependentes);
