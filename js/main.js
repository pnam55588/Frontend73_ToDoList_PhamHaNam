var listTask = new ListTask();
var validator = new Validator();

var getEle = function (id) {
    return document.getElementById(id);
};

var renderListTask = function (listTask) {
    let listTodo = ''
    let listCompleted = ''
    listTask.forEach(function (task) {
        if(task.status == 'todo'){
            listTodo += renderTask(task)
        }else{
            listCompleted += renderTask(task)
        }
    });
    getEle('todo').innerHTML = listTodo;
    getEle('completed').innerHTML = listCompleted;
};

function renderTask(task){
    return `
        <li>
            <span>${task.content}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteToDo(${task.id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus(${task.id})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>
    `
}

function validateInput(content){
    let isValid = true
    isValid &= validator.checkEmpty(content.trim(), "Empty task!")
    isValid &= validator.checkDuplicate(listTask.arr, content.trim(), "This task already existst")
    return isValid
}

function deleteTask(id) {
    listTask.deleteTask(id);
    renderListTask(dsnv.arr);
    setLocalStorage();
}
function getLocalStorage() {
    if (localStorage.getItem('listTask')) {
      listTask.arr = JSON.parse(localStorage.getItem("listTask"));
      renderListTask(listTask.arr);
    }
}

function setLocalStorage() {
    localStorage.setItem('listTask', JSON.stringify(listTask.arr));
}

function changeStatus(id){
    listTask.changeStatus(id)
    setLocalStorage()
    alert("Change status success")
    renderListTask(listTask.arr)
}

function deleteToDo(id){
    listTask.deleteTask(id)
    setLocalStorage()
    alert("delete success")
    renderListTask(listTask.arr)
}

getLocalStorage()

getEle('addItem').addEventListener('click', ()=>{
    let content = getEle('newTask').value
    if (!validateInput(content)) return;
    let task = new Task(content, "todo")
    listTask.addTask(task)
    renderListTask(listTask.arr)
    setLocalStorage()
    getEle('newTask').value = ""
})
