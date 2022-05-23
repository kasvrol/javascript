const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor; //this: esta propriedade do objeto
    },
};

console.log(cliente.saldo);
cliente.depositar(50);
console.log(cliente.saldo);

const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function (propriedade, tipo) {
        this.tipocolecao.push(tipo);
    },
};

for (i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao", "HQ" + i);
}

console.log(colecionador.tipocolecao);
