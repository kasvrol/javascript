//'camposDeTextoDoFormulario' será um array formado pelos seguintes elementos pegos dencriarLinhaso dos inputs do html
var camposDeTextoDoFormulario = [
    //'document.querySelector' seleciona os seguintes inputs(#)
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(camposDeTextoDoFormulario);

var corpoDaTabela = document.querySelector('table tbory')
//pega o corpo da tabela criada no html

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault()
    //não recarregar a página quando o formulário for enviado

    var criarLinhas = document.createElement('tr')
    //criar linhas

    camposDeTextoDoFormulario.forEach(function(campo){

        var criarColuna = document.createElement('td');
        //criar colunas

        criarColuna.textContent = campo.value;
        //nessa coluna escrever o valor do parametro (valor do campo do input)

        criarLinhas.appendChild(criarColuna);
        //criar a coluna dentro de uma linha
    });
    /**camposDeTextoDoFormulario.forEach(function(campo) é uma callback satisfeita com uma função que lê o valor dos elementos do array 'camposDeTextoDoFormulario' e cria linhas e tabelas para esses valores ao enviar o formulário */

    var criarColunaParaOVolume = document.createElement('td');
    //cria uma coluna para o elemento volume

    criarColunaParaOVolume.textContent = camposDeTextoDoFormulario[1].value * camposDeTextoDoFormulario[2].value;
    //escreve o resultado da multiplicação de quantidade e valor na coluna de volume

    criarLinhas.appendChild(criarColunaParaOVolume)
    //cria a coluna de volume dentro da linha

    corpoDaTabela.appendChild(criarLinhas);
    //cria a linha dentro da tabela

    camposDeTextoDoFormulario[0].value = '';
    camposDeTextoDoFormulario[1].value = 1;
    camposDeTextoDoFormulario[2].value = '0.0';
    //recarrega os seguintes valores para o formulário após o envio dos dados

    camposDeTextoDoFormulario[0].focus();
    //dá foco no input de data do formulário ao enviar os dados e criar a tabela
})