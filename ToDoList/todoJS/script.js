//selectors
const input = document. querySelector('.task_input')
const button = document. querySelector('.task_btn')
const list = document. querySelector('.task_list')
const filterOption = document.querySelector('.filter_tasks')

//Event listeners
button.addEventListener('click', addTask);
list.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTasks);

//Functions

function addTask(event) {
    //Prevent form from submitting
    event.preventDefault();
    
    //Todo Div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    
    //Create li
    const liDiv = document.createElement('li');
    liDiv.innerText = input.value;
    liDiv.classList.add('task_element');
    taskDiv.appendChild(liDiv);
    
    //Check mark button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check-square"></i>';
    doneButton.classList.add("done_btn");
    taskDiv.appendChild(doneButton);
    
    //DeleteButton
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete_btn");
    taskDiv.appendChild(deleteButton);
    
    //Append List
    list.appendChild(taskDiv);
    //clear Todo Input value
    input.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === "delete_btn") {
        const taskItem = item.parentElement;
        taskItem.remove();
    }

    // done mark
    if(item.classList[0] === "done_btn") {
        const taskItem = item.parentElement;
        taskItem.classList.toggle("done")
    }
}
