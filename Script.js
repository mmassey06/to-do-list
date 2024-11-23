// Select elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Add a new task
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task item
  const li = document.createElement("li");

  // Add text
  li.textContent = taskText;

  // Add a "complete" button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.style.marginLeft = "10px";

  // Add a "delete" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "5px";

  // Mark task as complete
  completeButton.addEventListener("click", () => {
    li.classList.toggle("complete");
  });

  // Delete task
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
