
let btnTema = document.querySelector('#tema');
btnTema.addEventListener('click', alteraTema);

let inputTask = document.querySelector('#inputTask');

let btnAddTask = document.querySelector('.btnAddTask');
btnAddTask.addEventListener('click', adicionarTarefa);

let listaTarefas = document.querySelector('#listaTarefas');

let tarefas = [];



// SALVAMENTO LOCAL
if(localStorage.getItem('tarefas')){
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
    render();
    
}else{
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}


// INSERIR TAREFA:
function adicionarTarefa(e) {
    e.preventDefault();

    let inputValue = inputTask.value;
    
    if (inputValue != '') {    
        inputTask.classList.remove('erro');
        tarefas.push(inputValue);
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
        inputTask.value = '';
        inputTask.focus();
        render();

    } else {
        inputTask.classList.add('erro');
        inputTask.focus();
    }
}


//DELETAR TAREFA 
function removeTarefa(index) {
    tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    render();
}


// RENDERIZAÇÃO DOS DADOS SALVOS LOCALMENTE
function render() {
    listaTarefas.innerHTML = '';

    tarefas.forEach((element, index) => {
    
        listaTarefas.innerHTML += 
            `<div class="tasks">
                <p id="${index}">${element}</p>
                <button class="buttonDelete" onclick="removeTarefa(${index})"><i class="far fa-trash-alt"></i></button>
            </div> `;
    });
  
}


// TEMA DA APLICAÇÃO
function alteraTema(){
    let body = document.querySelector('body');
    let tema = body.classList.toggle('themaClaro');
  
    if(!tema){
        btnTema.style.color = '#f57800'; 
        btnAddTask.classList.toggle('btnAddTaskDark');
        btnAddTask.classList.add('btnAddTask');
        inputTask.focus();

    } else{
        btnTema.style.color = '#6f1abd';
        btnAddTask.classList.remove('btnAddTask');
        btnAddTask.classList.toggle('btnAddTaskDark');
        inputTask.focus();
    }
}