const botaoDeleta = (atualiza, id)=> {
    const index = id;
    const tarefaCadastrada = JSON.parse(localStorage.getItem("tarefa"));
    tarefaCadastrada.splice(index, 1);

    localStorage.setItem("tarefa", JSON.stringify(tarefaCadastrada));

    atualiza();
}


const BotaoDeletar = (atualiza, id)=> {
    let botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "Deletar";
    botaoDeletar.classList.add("botao-deletar");

    // É importante direcionar a função para o botão deletar, para que o evento seja acionado automaticamente
    botaoDeletar.addEventListener("click", ()=> botaoDeleta(atualiza, id)

        // let deletar = evento.target;
        // let deletado = deletar.parentNode;
        // deletado.remove();

        // const index = id;
        // const tarefaCadastrada = JSON.parse(localStorage.getItem("tarefa"));
        // tarefaCadastrada.splice(index, 1);

        // localStorage.setItem("tarefa", JSON.stringify(tarefaCadastrada));

        // atualiza();
    );

    return botaoDeletar;
}

export default BotaoDeletar;

