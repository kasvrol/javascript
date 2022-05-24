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

const propsClientes = Object.keys(cliente);
console.log("🚀 ~ file: metodosDeObjetos.js ~ line 22 ~ propsClientes ", propsClientes)
//[ 'nome', 'idade', 'cpf', 'email', 'dependentes' ]

//--------------------------------------------------------------------------------------------------

function ofereceSeguro(objeto) {
    const propsClientes = Object.keys(objeto);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${objeto.nome}`)
    }
}

ofereceSeguro(cliente)//Oferta de seguro de vida para André

//--------------------------------------------------------------------------------------------------
const propsValuesClientes = Object.values(cliente);
console.log("🚀 ~ file: index.js ~ line 24 ~ propsClientes", propsClientes)
// 'André',
//   36,
//   '12345678910',
//   'andre@email.com',
//   [
//     {
//       nome: 'Samira Mariazinha',
//       parentesco: 'filha',
//       dataNasc: '04/01/2013'
//     },
//     {
//       nome: 'Samila Mariquinha',
//       parentesco: 'filha',
//       dataNasc: '04/01/2012'
//     },
//     {
//       nome: 'Samia Maria',
//       parentesco: 'filha',
//       dataNasc: '04/01/2014'
//     }
//   ]
// ]
