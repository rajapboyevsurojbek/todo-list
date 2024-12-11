const collectionEL = document.querySelector(".collection");
const inputEL = document.querySelector(".text");
const formEL = document.querySelector(".form");

const TODOS = [];

function createTodo(data) {
  while (collectionEL.firstChild) {
    collectionEL.firstChild.remove();
  }
  data.forEach((item) => {
    const liEL = document.createElement("li");
    liEL.className = "list";
    liEL.innerHTML = `
     <input ${item.completed ? "checked" : ""} type="checkbox" />
      <span>${item.title}</span>
    `;
    collectionEL.appendChild(liEL);
  });
}

addEventListener("load", () => {
  createTodo(TODOS);
});

formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  let newtodo = {
    id: new Date().getTime(),
    title: inputEL.value,
    status: false,
  };
  TODOS.push(newtodo);

  // localStorage.setItem("todos", JSON.stringify(TODOS));
  createTodo(TODOS);
  inputEL.value = "";
});
