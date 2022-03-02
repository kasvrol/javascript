const alunos = ['João', 'Julio', 'Geovana', 'Cicero']

alunos.forEach(imprimeNomes)
/*João
    Julio
    Geovana
    Cicero*/

function imprimeNomes(nome) {
    console.log(nome)
}

/////objetivo: adicionar 1 ponto em cada nota, se a nota for 10, manter assim

const notas = [8, 8, 10, 9]

const notasAtualizadas = notas.map(nota =>  
    nota === 10? nota : ++nota)

console.log(notasAtualizadas)

//Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.