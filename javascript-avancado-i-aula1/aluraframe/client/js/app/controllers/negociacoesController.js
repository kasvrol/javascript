class NegociacoesController {

    constructor(){
        let $ = document.querySelector.bind(document);
        // irá setar document.querySelector como uma variável

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){

        event.preventDefault()
        //não permite o formulário recarregar a página

        let DateHelper = new DateHelper().textoParaData(this._inputData.value)

        let negociacao = new Negociacao (
            DateHelper,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao)

        console.log(DateHelper.dataParaTexto(negociacao.data))
    }
}