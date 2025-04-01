// script.js

// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";

        // Add event listeners to edit and delete buttons
        const editButton = listItem.querySelector(".edit-button");
        const deleteButton = listItem.querySelector(".delete-button");

        editButton.addEventListener("click", editTask);
        deleteButton.addEventListener("click", deleteTask);
    }
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
}

// Function to edit a task
function editTask(event) {
    const listItem = event.target.parentNode;
    const taskTextElement = listItem.querySelector(".task-text");
    const taskText = taskTextElement.textContent;

    // Create input field for editing
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskText;
    editInput.classList.add("edit-input");

    // Replace task text with input field
    taskTextElement.parentNode.replaceChild(editInput, taskTextElement);

    // Focus on input field
    editInput.focus();

    // Add event listener to save changes on Enter key press
    editInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            saveChanges();
        }
    });

    // Function to save changes
    function saveChanges() {
        const editedTaskText = editInput.value.trim();

        if (editedTaskText !== "") {
            // Create new task text element
            const newTaskTextElement = document.createElement("span");
            newTaskTextElement.classList.add("task-text");
            newTaskTextElement.textContent = editedTaskText;

            // Replace input field with new task text element
            editInput.parentNode.replaceChild(newTaskTextElement, editInput);
        } else {
            // If input is empty, revert to original task text
            taskTextElement.parentNode.replaceChild(taskTextElement, editInput);
        }
    }
}

// Add event listener to add button
addButton.addEventListener("click", addTask);

// Add event listener to input field for adding tasks on Enter key press
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
