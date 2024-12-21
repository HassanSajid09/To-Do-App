const container = document.getElementById("container");
const register = document.getElementById("register");
const login = document.getElementById("login");
register.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");
let flag = 1;
const check = (elem) => {
  if (elem.value.length > 0) {
    if (elem.value != pass.value) {
      document.getElementById("err").innerText =
        "Confirm Password does not match!";
      flag = 0;
    } else {
      document.getElementById("err").innerText = "";
      flag = 1;
    }
  } else {
    document.getElementById("err").innerText = "Please Confirm Your Password";
    flag = 0;
  }
  if (pass.value.length === 0 || elem.value.length === 0) {
    document.getElementById("err").innerText = "Please Confirm Your Password";
    flag = 0;
  }
};
const check2 = (elem) => {
  if (elem.value.length > 0) {
    if (elem.value != pass2.value) {
      document.getElementById("err2").innerText =
        "Confirm Password does not match!";
      flag = 0;
    } else {
      document.getElementById("err2").innerText = "";
      flag = 1;
    }
  } else {
    document.getElementById("err2").innerText = "Please Confirm Your Password";
    flag = 0;
  }
};
let validate = () => {
  if (flag === 1) {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      document.getElementById("err").innerText = "Please enter a username!";
      return false;
    }
    localStorage.setItem("currentUser", username);
    window.open("http://127.0.0.1:5500/ToDoList/toDoApp/ToDo.html", "_blank");
    return true;
  } else {
    return false;
  }
};
