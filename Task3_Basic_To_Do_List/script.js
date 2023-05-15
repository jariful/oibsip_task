function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
  
    if (taskText === "") {
      return;
    }
  
    var listItem = document.createElement("li");
    var textSpan = document.createElement("span");
    textSpan.innerText = taskText;
  
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
      taskList.removeChild(listItem);
    };
  
    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = function() {
      textSpan.classList.toggle("completed");
    };
  
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    listItem.appendChild(completeButton);
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  