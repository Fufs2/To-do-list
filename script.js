let submit = document.querySelector("button");
let ul = document.querySelector("ul");
let inputText = document.querySelector("input");
submit.addEventListener("click", function(){
  let newTask = document.createElement("li");
  let newBtn = document.createElement("button");
  newTask.textContent = inputText.value;
  newBtn.textContent = "Delete";
  ul.appendChild(newTask);
  newTask.appendChild(newBtn);
  
  newBtn.addEventListener("click",function(){
  ul.removeChild(newTask);
});
  inputText.value = '';
})

