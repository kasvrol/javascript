class Negociacao{
    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        // congela a data e não deixa o usuário alterar.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
        //congela os valores da classe, mas não congela os valores que são objetos de dentro da classe
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor;
    }
}