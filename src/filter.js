//array de alunos e notas
const alunos = ['João', 'Julio', 'Geovana', 'Cicero']
const notas = [6, 3 , 9.5, 7]


//filtrar o array alunos e retornar o parametro que satisfaça a função
const reprovados = alunos.filter( ( _ , indice ) => notas[indice] <5 )

// _ é declarado para devolver o dado quando o parametro for satisfeito

console.log(`reprovados: ${reprovados}`)

/**
 * Como funciona o método filter
 *  Quando a função callback retorna true, o elemento é adicionado no array de retorno.
 *  Quando ela retorna false, o elemento é descartado.
 */