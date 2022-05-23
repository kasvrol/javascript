// criação de um objeto a partir de outro:

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
};

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

//copia de objeto que altera o objeto literal

const objPersonagemAlteracao = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
};

const objPersonagemAlteracao2 = objPersonagemAlteracao;
objPersonagemAlteracao2.nome = "Gandalf, o Cinzento";

console.log(objPersonagemAlteracao.nome); //Gandalf, o Cinzento
console.log(objPersonagemAlteracao2.nome); //Gandalf, o Cinzento
