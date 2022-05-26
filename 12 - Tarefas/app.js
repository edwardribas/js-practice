const form = document.querySelector('main form'),
      input = form.querySelector('input'),
      ul = document.querySelector('main .tasks'),
      deleteAll = document.querySelector('main > button');

// Form submit
form.onsubmit = e => {
    e.preventDefault();

    if (input.value.trim() !== "") addTask(input.value.trim());
    input.value = "";
}

// New Li Element
const newLi = task => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task;

    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    [span, actions].forEach(e => li.appendChild(e));
    return li;
}

// Add task
const addTask = task => {
    const liElement = newLi(task);
    ul.appendChild(liElement)
    updateStorage();
}

// Update the storage
const updateStorage = () => {
    const tasks = [];
    for(let task of ul.querySelectorAll('li span')){
        tasks.push(task.innerText);
    }
    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', jsonTasks);

    deleteAll.classList.toggle('active', tasks.length >= 2);
}

// Delete tasks
document.onclick = e => {
    if(e.target.classList.contains('fa-solid')){
        e.target.parentElement.parentElement.remove();
        updateStorage()
    }
}

// Delete all tasks
deleteAll.onclick = () => {
    const lis = ul.querySelectorAll('li');
    for(let li of lis){
        li.remove();
    }
    updateStorage();
}

// Show tasks
window.onload = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks){
        for(let task of storedTasks){
            ul.appendChild(newLi(task));
        }
        updateStorage()
    }
}