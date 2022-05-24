const cliente = {
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

let relatorio = '';

// Para cada ação:

for (let info in cliente) {
    relatorio += `${ info } `
}
//nomeidadecpfemaildependentes

//--------------------------------------------------------

for (let info in cliente) {
    relatorio += `${ cliente[info] } `
}
//André3612345678910andre@email.com[object Object],[object Object],[object Object]


//--------------------------------------------------------

for (let info in cliente) {
    relatorio += ` - ${ cliente[info] } `
}
//- André - 36 - 12345678910 - andre@email.com - [object Object],[object Object],[object Object]

//--------------------------------------------------------

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `${info}: ${cliente[info]} 
`}}
// nome: André 
// idade: 36
// cpf: 12345678910
// email: andre@email.com