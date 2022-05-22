const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

// Método acessar objeto através da um array
// imprime a posição do array que é identica a posição do objeto
console.log(cliente["nome"]);
