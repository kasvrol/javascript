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
