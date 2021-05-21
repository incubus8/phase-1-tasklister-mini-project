document.addEventListener("DOMContentLoaded", () => {
  
});

document.querySelector('#create-task-form').addEventListener('submit', createNewList)
let form = document.querySelector('#create-task-form')

function createNewList (e) {
  e.preventDefault()
  let li = document.createElement('li')
    li.textContent = form.children[1].value
    document.querySelector('#tasks').appendChild(li)
    console.log(e.target['new-task-description'].value)
}

