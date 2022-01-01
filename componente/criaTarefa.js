import CarregaTarefa from "./carregaTarefa.js";
import BotaoDeletar from "./deleta.js";

const Tarefa = ({novaData, texto}, id)=> {

    var tarefa = document.createElement("li");
    // Verificação da data

    var conteudo = `<p class="texto">${novaData} ~ ${texto}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.classList.add("conteudo_lista-item");

    //Adicionando os botão deletar
    tarefa.appendChild(BotaoDeletar(CarregaTarefa, id));

    return tarefa;
}

export default Tarefa;