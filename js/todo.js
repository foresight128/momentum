const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"
//todo를 저장해줄 배열을 하나 만듦
let toDos = [];

function saveToDos(){
    //localStorage에 todos 배열을 저장하기 위한 함수 key는 todos, value는 배열toDos
    //JSON.stringify(toDos) >> 어떤 js코드든 string으로 만들어줌 object, array 모두
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    //몇번째 todo인지 확인하고
    const li = event.target.parentElement;
    //해당하는 li를 지워
    li.remove();
    //선택된 li가 아닌 것만 남긴다는 의미
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    //li의 자식으로 span을 넣고
    li.appendChild(span);
    //li의 자식으로 span 다음에 button을 넣음
    li.appendChild(button);
    //todoList라는 ul안에 li를 자식으로 넣어줌
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    //newTodo라는 변수에 toDoInput의 value값을 복사하고
    const newTodo = toDoInput.value;  
    //toDoInput의 value값은 비워줌
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
    }
    //newTodoObj를 toDos에 넣어주고
    toDos.push(newTodoObj);
    //paintToDo 함수를 실행해 그때 인자값은 newTodoObj
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    //JSON.parse(savedToDos) >> string형으로 되어 있는 것을 진짜 array로 바꿔
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}