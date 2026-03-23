const form = document.querySelector("#form-tarefa"); 
const input = document.querySelector("#input-tarefa");
const lista = document.querySelector("#lista-tarefas");
const mensagem = document.querySelector("#mensagem");

const tarefas = [];

function validarTarefa(texto) {
  if (texto.trim() === "") {
    mensagem.textContent = "A tarefa não pode estar vazia.";
    return false;
  }

  mensagem.textContent = "";
  return true;
}

function renderTarefas() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa;

    // BOTÃO EDITAR
    const editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";

    editarBtn.addEventListener("click", () => {
      const novoTexto = prompt("Editar tarefa:", tarefa);
      if (novoTexto !== null && novoTexto.trim() !== "") {
        tarefas[index] = novoTexto;
        renderTarefas();
      }
    });

    // BOTÃO EXCLUIR
    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";

    excluirBtn.addEventListener("click", () => {
      tarefas.splice(index, 1);
      renderTarefas();
    });

    // AGRUPAR BOTÕES
    const divBotoes = document.createElement("div");
    divBotoes.appendChild(editarBtn);
    divBotoes.appendChild(excluirBtn);

    li.appendChild(span);
    li.appendChild(divBotoes);

    lista.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoTarefa = input.value;

  if (!validarTarefa(textoTarefa)) return;

  tarefas.push(textoTarefa);
  renderTarefas();

  input.value = "";
});