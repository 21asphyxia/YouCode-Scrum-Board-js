/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

 let form = document.getElementById("form");
 let title = document.getElementById("taskTitle");
 let feature = document.getElementById("feature");
 let bug = document.getElementById("bug");
 let priority = document.getElementById("priority");
 let taskStatus = document.getElementById("status");
 let date = document.getElementById("date");
 let description = document.getElementById("description");
 let taskss = document.getElementById(taskStatus);
 let add = document.getElementById("save-button");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (title.value === "") {
      console.log("failure");
      msg.innerHTML = "Task cannot be blank";
    } else {
      console.log("success");
      msg.innerHTML = "";

      acceptData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click();
    }
};

let data =[];
let acceptData = () => {
    let taskType=null;
    if (feature.checked){taskType="Feature";}
    else {taskType="Bug"}
    data.push({
        'title': title.value,
        'type': taskType,
        'priority':priority.value,   
        'status':   taskStatus.value,
        'date':   date.value,
        'description': description.value,
    });
    localStorage.setItem("data",JSON.stringify(data));

    console.log(data);

};

function readData(){
    
    data
}


function createTask() {
    // initialiser task form
    initTaskForm();
    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask() {
    


    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form
    initTaskForm();
    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}