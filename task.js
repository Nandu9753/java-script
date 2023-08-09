const taskList = document.getElementById('taskList');
  function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskStatus = "New";
    if(taskText != ''){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td><span>${taskText}<span></td>
        <td>
        <button onclick="markStatus(this)" id="status">${taskStatus}</button></td>
        <td><button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button></td>
      `;
      taskList.appendChild(tr);
      taskInput.value = '';
    }
  }
  function editTask(button){
    const task = button.parentNode.parentNode.children[0];
    const taskText = task.querySelector('span').textContent;
    const newText = prompt('Edit task:', taskText);
    
    if (newText !== null && newText.trim() !== '') {
      task.querySelector('span').textContent = newText;
    }
    
  }
  function deleteTask(button){
    const task = button.parentNode.parentNode;
    taskList.removeChild(task);
  }
  function markStatus(button){
    const task = button.parentNode.parentNode.children[1];
    task.querySelector('button').textContent = "Done";
    task.querySelector('button').style = "background-color:green";
    
  }