const disciplinas = ['Matemática', 'Português', 'Geografia', 'Ciências']
const notas = ['10', '9', '9.5', '7']

const boletim = [disciplinas, notas] 

/*[[ 'Matemática', 'Português', 'Geografia', 'Ciências' ],[ '10', '9', '9.5', '7' ]]*/

const boletimImpresso = [`${boletim[0][0]}: ${boletim[1][0]}, ${boletim[0][1]}: ${boletim[1][1]}, ${boletim[0][2]}: ${boletim[1][2]}, ${boletim[0][3]}: ${boletim[1][3]}`]

/*[ 'Matemática: 10, Português: 9, Geografia: 9.5, Ciências: 7' ]*/

// O array 'boletimImpresso' guarda uma string que é formada acessando o primeiro elemento do array 'boletim' (disciplinas) com a primeira chave ([0]), com a segunda chave ([0]) acessa o primeiro elemento do array 'disciplinas' que está dentro do array boletim. boletimImpresso => boletim [0] => disciplinas [0] => 'Matemática'

//E após ':' acessa o segundo elemento do array 'boletim' (notas) com a primeira chave ([1]), com a segunda chave ([0]) acessa o primeiro elemento do array 'notas' que está dentro do array boletim. boletimImpresso => boletim [1] => notas [0] => '10' 


//ATIVIDADE ALURA

const idades = [30, 35, 28]
const nomes = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

const funcionarios = [nomes,idades,faculdade]

console.log(`A funcionária: ${funcionarios[0][0]} tem ${funcionarios[1][0]} e faz faculdade? ${funcionarios[2][0]}`)
console.log(`A funcionária: ${funcionarios[0][1]} tem ${funcionarios[1][1]} e faz faculdade? ${funcionarios[2][1]}`)
console.log(`A funcionária: ${funcionarios[0][2]} tem ${funcionarios[1][2]} e faz faculdade? ${funcionarios[2][2]}`)