const objPersonagemAlteracao = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
};

const objPersonagemAlteracao2 = objPersonagemAlteracao;
objPersonagemAlteracao2.nome = "Gandalf, o Cinzento";

console.log(objPersonagemAlteracao.nome); //Gandalf, o Cinzento
console.log(objPersonagemAlteracao2.nome); //Gandalf, o Cinzento
