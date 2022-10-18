/*
 *
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
let toDo = document.getElementById("to-do-tasks");
let inProgress = document.getElementById("in-progress-tasks");
let done = document.getElementById("done-tasks");
let taskss = document.getElementById(taskStatus);
let add = document.getElementById("save-button");

function createTask() {
  // initialiser task form
  initTaskForm();
  // Afficher le boutton save
  add.classList.remove("d-none");
  document.getElementById("cancel-button").classList.remove("d-none");
  // Ouvrir modal form
  $(document).ready(function () {
    $("#form").modal("show");
  });

  document.getElementsByClassName()
}

function saveTask() {
  // Recuperer task attributes a partir les champs input
    // Accepting the input
    let acceptData = () => {
        let taskType = null,
        taskStatusValue = null;
        if (taskStatus.value == "to-do-tasks") {
        taskStatusValue = "To Do";
        } else if (taskStatus.value == "in-progress-tasks") {
        taskStatusValue = "In Progress";
        } else if (taskStatus.value == "done-tasks") {
        taskStatusValue = "Done";
        }

        if (feature.checked) {
        taskType = "Feature";
        } else {
        taskType = "Bug";
        }

        // Ajoutez object au Array
        tasks.push({
        title: title.value,
        type: taskType,
        priority: priority.value,
        status: taskStatusValue,
        date: date.value,
        description: description.value,
        });
        localStorage.setItem("hamid", JSON.stringify(tasks));

        console.log(tasks);
    };

    // Empty input check
    let formValidation = () => {
        if (title.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
        } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        document.getElementById("close-button").click();
        }
    };

  // running the function  
  formValidation();

  // refresh tasks
  reloadTasks();
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

  add.classList.add("d-none");
  document.getElementById("cancel-button").classList.add("d-none");
  document.getElementById("delete-button").classList.add("d-none");
  document.getElementById("update-button").classList.add("d-none");
}

function reloadTasks() {
  // Remove tasks elements
  document.getElementById(
    "to-do-tasks"
  ).innerHTML = `<!-- TO DO TASKS HERE -->`;
  document.getElementById(
    "in-progress-tasks"
  ).innerHTML = `<!-- IN PROGRESS TASKS HERE -->`;
  document.getElementById("done-tasks").innerHTML = `<!-- DONE TASKS HERE -->`;
  // Set Task count
  let toDoCount = 0,
    inProgressCount = 0,
    doneCount = 0,
    taskCount = 0;
  tasks.forEach((element) => {
    // if (element['status'] == "To Do"){
    //     toDo.innerHTML += ;}

    let icon;
    

    if (element["status"] == "To Do") {
      taskCount++;
      toDoCount++;
      document.getElementById("to-do-tasks-count").innerHTML = `${toDoCount}`;
      icon = "bi bi-question-circle text-success fs-4";
    } else if (element["status"] == "In Progress") {
      taskCount++;
      inProgressCount++;
      document.getElementById(
        "to-do-tasks-count"
      ).innerHTML = `${inProgressCount}`;
      icon = "spinner-border spinner-border-sm text-success";
    } else if (element["status"] == "Done") {
      taskCount++;
      doneCount++;
      document.getElementById("to-do-tasks-count").innerHTML = `${doneCount}`;
      icon = "bi bi-check2-circle text-success fs-3";
    }

    document.querySelector('[value="' + element['status'] + '"]').innerHTML += `
        <button class="row list-group-item-action mx-0 border">
								<div class="col-1 m-auto">
									<i class="${icon}"></i> 
								</div>
								<div class="col-11">
									<div class="fs-6 text-dark fw-bolder">${element['title']}</div>
									<div class="">
										<div class="text-secondary">#${taskCount} created in 2022-10-08</div>
										<div class="" title="${element['description']}">${element['description']}</div>
									</div>
									<div class="mt-1 mb-2">
										<span class="btn-primary px-2 py-1 rounded fw-bolder" style="font-size:0.6rem">High</span>
										<span class="bg-light-600 rounded fw-bolder px-2 py-1" style="font-size:0.6rem">Feature</span>
									</div>
								</div>
							</button>
        `;
  });
}
