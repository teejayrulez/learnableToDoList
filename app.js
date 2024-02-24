window.addEventListener("load", () => {
  const form = document.querySelector("#new-form");
  const input = document.querySelector("#new-input");
  const listElement = document.querySelector("#lists");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Nothing to add to my list");
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("list");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");

    taskElement.appendChild(taskContentElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(taskInputElement);

    const taskActionElement = document.createElement("div");
    taskActionElement.classList.add("actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("edit");
    taskEditElement.innerHTML = "Edit";

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("delete");
    taskDeleteElement.innerHTML = "Delete";
      
      taskActionElement.appendChild(taskEditElement);
      taskActionElement.appendChild(taskDeleteElement);

      taskElement.appendChild(taskActionElement)

      listElement.appendChild(taskElement);
      
      input.value = "";

      taskEditElement.addEventListener('click', () => {
          if (taskEditElement.innerText.toLowerCase() == "edit") {
              taskInputElement.removeAttribute("readonly");
              taskInputElement.focus();
              taskEditElement.innerText = "Save";
          } else {
              taskInputElement.setAttribute("readonly", "readonly");
              taskEditElement.innerText = "Edit";
          }
      });

      taskDeleteElement.addEventListener('click', () => {
          listElement.removeChild(taskElement);
      });

  });
});
