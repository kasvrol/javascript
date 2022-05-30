function Cliente(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const andre = new Cliente('andré', 'andre@gmail.com', '12345678910', 100)

console.log(andre)

// Cliente {
//     nome: 'andré',
//     email: 'andre@gmail.com',
//     cpf: '12345678910',
//     saldo: 100,
//     depositar: [Function (anonymous)]
//   }