const toDoForm =document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList =document.querySelector(".js-toDoList");

const TODOS_LS ="toDos";

const toDos =[];

function deleteToDo(event){
    console.log(event.target.parentNode);

}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));    
}                               //json은 js의 obejct >string 으로 해줌

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    const span =document.createElement("span");
    const newId =toDos.length+1; //d를 줘야 하나씩 지울 때 어떤거 할 지 알수 있기 떄문이다
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id =newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  
}

function loadToDos(){
    const loadedToDos =localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit);
    
    }
    
    init();