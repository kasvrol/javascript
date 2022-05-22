const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
};

// Método substring [.substring(a, b)]: permite percorrer uma string e capturar os elementos da primeira posição (a) até uma posição antes do segundo número (b).
console.log(cliente.cpf.substring(0, 3));
