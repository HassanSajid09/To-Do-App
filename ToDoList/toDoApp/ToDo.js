let currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  alert("No user logged in. Redirecting to login page...");
  window.location.href =
    "http://127.0.0.1:5500/ToDoList/login%20page/loginpage.html";
}

document.getElementById(
  "currentUser"
).innerText = `Logged in as: ${currentUser}`;

const inputBox = document.getElementById("inputBox");
const listCont = document.getElementById("listContainer");

const addTask = () => {
  if (!inputBox.value.trim()) {
    document.getElementById("err").innerText = "Please enter a task!";
  } else {
    let li = document.createElement("li");
    li.className = "list";

    let taskText = document.createElement("span");
    taskText.className = "taskText";
    taskText.innerText = inputBox.value;

    let del = document.createElement("span");
    del.innerHTML = "❌";
    del.className = "delete-btn";

    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = "✍️";

    let editInput = document.createElement("input");
    editInput.className = "edit-inp";
    editInput.type = "text";

    li.append(del, editBtn, editInput, taskText);

    listCont.appendChild(li);

    inputBox.value = "";
    document.getElementById("err").innerText = "";
  }
  saveData();
};

listCont.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains("edit-btn")) {
      const task = e.target.parentElement;
      const taskText = task.querySelector(".taskText");
      const editInput = task.querySelector(".edit-inp");
      const editBtn = e.target;

      if (editBtn.innerHTML === "✍️") {
        editInput.value = taskText.innerText;
        taskText.style.display = "none";
        editInput.style.display = "inline";
        editBtn.innerHTML = "✔";
      } else {
        taskText.innerText = editInput.value;
        editInput.style.display = "none";
        taskText.style.display = "inline";
        editBtn.innerHTML = "✍️";
      }
      saveData();
    }
  },
  false
);
const saveData = () => {
  if (currentUser) {
    localStorage.setItem(`tasks_${currentUser}`, listCont.innerHTML);
  }
};
const showData = () => {
  if (currentUser) {
    const savedData = localStorage.getItem(`tasks_${currentUser}`);
    listCont.innerHTML = savedData || "";
  }
};

document.getElementById("logoutBtn").addEventListener("click", () => {
  saveData();
  localStorage.removeItem("currentUser");
  alert("Logged out. Redirecting to login page...");
  window.location.href =
    "http://127.0.0.1:5500/ToDoList/login%20page/loginpage.html";
});
showData();
