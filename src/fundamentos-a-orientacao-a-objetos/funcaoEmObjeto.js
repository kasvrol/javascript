const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    },
};

console.log(cliente.saldo);
cliente.depositar(50);
console.log(cliente.saldo);
