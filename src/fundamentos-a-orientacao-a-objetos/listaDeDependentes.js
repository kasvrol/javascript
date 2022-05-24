const cli = require("nodemon/lib/cli");

const cliente = [
    {
        nome: "André",
        dependentes: [
            {
                nome: "Samira",
                parentesco: "filha",
                dataNasc: "04/01/2013",
            },
            {
                nome: "Samila",
                parentesco: "filha",
                dataNasc: "04/01/2012",
            },
            { nome: "Samia", parentesco: "filha", dataNasc: "04/01/2014" },
        ],
    },
    {
        nome: "Luma",
        dependentes: [
            {
                nome: "Lua",
                parentesco: "filha",
                dataNasc: "04/01/2013",
            },
            {
                nome: "Sol",
                parentesco: "filha",
                dataNasc: "04/01/2012",
            },
            { nome: "Luz", parentesco: "filha", dataNasc: "04/01/2014" },
        ],
    }
]

const propsClientes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.log(propsClientes)
// [
//     { nome: 'Samira', parentesco: 'filha', dataNasc: '04/01/2013' },
//     { nome: 'Samila', parentesco: 'filha', dataNasc: '04/01/2012' },
//     { nome: 'Samia', parentesco: 'filha', dataNasc: '04/01/2014' },
//     { nome: 'Lua', parentesco: 'filha', dataNasc: '04/01/2013' },
//     { nome: 'Sol', parentesco: 'filha', dataNasc: '04/01/2012' },
//     { nome: 'Luz', parentesco: 'filha', dataNasc: '04/01/2014' }
//   ]

console.table(propsClientes)
// ┌─────────┬──────────┬────────────┬──────────────┐
// │ (index) │   nome   │ parentesco │   dataNasc   │
// ├─────────┼──────────┼────────────┼──────────────┤
// │    0    │ 'Samira' │  'filha'   │ '04/01/2013' │
// │    1    │ 'Samila' │  'filha'   │ '04/01/2012' │
// │    2    │ 'Samia'  │  'filha'   │ '04/01/2014' │
// │    3    │  'Lua'   │  'filha'   │ '04/01/2013' │
// │    4    │  'Sol'   │  'filha'   │ '04/01/2012' │
// │    5    │  'Luz'   │  'filha'   │ '04/01/2014' │
// └─────────┴──────────┴────────────┴──────────────┘