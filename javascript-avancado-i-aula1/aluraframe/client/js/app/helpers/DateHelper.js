class DateHelper{
    dataParaTexto(data) {

        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`

    }

    textoParaData(texto) {

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
         //necessita do map para transformar o mês digitado no mês correspondente ao calendário, porque o js entenderá o mÊs digitado como o próximo mês se não fizer a correção

    }
}