//array de alunos e notas
const alunos = ['João', 'Julio', 'Geovana', 'Cicero']
const notas = ['10', '9', '9.5', '7']

//array criado com array de alunos e notas
let listaDeNotasEAlunos = [alunos, notas]


//função nomeAluno
const exibeAlunoNota = (nomeAluno) => {

    //condicional 'se' array alunos (que está dentro de listaDeNotasEAlunos) incluir o aparametro da função exibeAlunoNota, faça:
    if(listaDeNotasEAlunos[0].includes(nomeAluno)){

        // variavel 'indice' pega o array 'alunos' - dentro do array listaDeNotasEAlunos - e estabelece o inicio no parametro que pode ser dado pelo usuário ao usar a função 'exibeAlunoNota'
        let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno)
        //retorna o array listaDeNotasEAlunos puxando o array alunos e notas na mesma posição (indicada por indice)
        return listaDeNotasEAlunos[0][indice] + ' sua média é: ' + listaDeNotasEAlunos[1][indice]

    }

    // caso a primeira condicional não seja satisfeita, faça:
    else {

        //retornará a frase 'Aluno não cadastrado'
        return 'Aluno não cadastrado'

    }
}

// as variaveis abaixo indicam o parametro que deve ser buscado dentro do array nome e dar a posição do nome para a variavel 'indice'
//posterior a variavel indice da posição que deve retornar nos arrays nome e notas
let joao = (exibeAlunoNota('João'))
//João sua média é: 10

let julio = (exibeAlunoNota('Julio'))
//Julio sua média é: 9

let geovana = (exibeAlunoNota('Geovana'))
//Julio sua média é: 9

let cicero = (exibeAlunoNota('Cicero'))
//Cicero sua média é: 7