import Formulario from "./componente/formulario.js";
import CarregaTarefa from "./componente/carregaTarefa.js";

let botaoAdicionar = document.querySelector(".conteudo_tarefa-form_botao");

botaoAdicionar.addEventListener("click", (evento) => {

    evento.preventDefault();

    //Pegando as tarefas do localStorage
    let novaTarefa = JSON.parse(localStorage.getItem("tarefa")) || [];

    //Coletando dados do formulário

    let form = document.querySelector("#conteudo_tarefa-form");

    const valor = Formulario(form);
   
    let novaData = moment(valor.data).format("DD/MM/YYYY");
    let texto = valor.texto;

    const valores = {
        novaData,
        texto
    }
    //Criando um array com as tarefas atualizadas

    const tarefasAtualizadas = [...novaTarefa, valores];

    //Enviando as tarefas para o localStorage

    localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas));

    form.reset();

    //Carregando a lista de tarefas na página
    CarregaTarefa();

    return valores;
});

CarregaTarefa();







