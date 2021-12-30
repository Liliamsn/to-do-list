import Tarefa from "./criaTarefa.js";

const CarregaTarefa = ()=> {
    
    const lista = document.querySelector(".conteudo_lista");
        
    lista.innerHTML = " ";
    const tarefaCadastrada = JSON.parse(localStorage.getItem("tarefa")) || [];
    //Iterando sob o array de tarefas para armazená-los na lista
    tarefaCadastrada.forEach((tarefa)=> {
            
        lista.append(Tarefa(tarefa));
    });
}

export default CarregaTarefa;
