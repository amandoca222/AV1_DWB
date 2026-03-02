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
  lista.textContent = "";

  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.appendChild(li);
  });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const textoTarefa = input.value;

  if (!validarTarefa(textoTarefa)) {
    return;
  }

  tarefas.push(textoTarefa);
  renderTarefas();

  input.value = "";
});