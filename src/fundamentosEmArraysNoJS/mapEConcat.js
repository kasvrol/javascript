const nomes = ['ana Karolina', 'Ana carolina', 'ANA carolyna']

const nomesAtualizados = nomes.map( nome => nome.toLocaleUpperCase() )

const nomesAtualizados2 = nomes.map( nome => nome.toLocaleLowerCase() )


console.log(nomesAtualizados) // [ 'ANA KAROLINA', 'ANA CAROLINA', 'ANA CAROLYNA' ]

console.log(nomesAtualizados2) // [ 'ana karolina', 'ana carolina', 'ana carolyna' ]

/////////////////////


const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura