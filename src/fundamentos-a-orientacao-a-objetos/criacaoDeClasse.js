class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente('André', 'andre@email.com', '12345678910', 100)
console.log(andre)

// Cliente {
//     nome: 'André',
//     email: 'andre@email.com',
//     cpf: '12345678910',
//     saldo: 100
//   }

console.log(andre)