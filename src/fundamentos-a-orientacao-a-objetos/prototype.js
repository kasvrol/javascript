function Cliente(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

function ClientePoupanca(nome, email, cpf, saldo, saldoPoupanca) {
    Cliente.call(this, nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
}

const andre = new ClientePoupanca('andré', 'andre@gmail.com', '12345678910', 100, 200)

console.log(andre)

// ClientePoupanca {
//     nome: 'andré',
//     email: 'andre@gmail.com',
//     cpf: '12345678910',
//     saldo: 100,
//     depositar: [Function (anonymous)],
//     saldoPoupanca: 200
//   }

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    this.saldoPoupanca += valor
}

andre.depositarPoupanca(30)

console.log(andre)
// ClientePoupanca {
//     nome: 'andré',
//     email: 'andre@gmail.com',
//     cpf: '12345678910',
//     saldo: 100,
//     depositar: [Function (anonymous)],
//     saldoPoupanca: 230
//   }