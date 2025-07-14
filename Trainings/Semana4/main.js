const name = document.getElementById("name");
const age = document.getElementById("age");
const form = document.getElementById("form");
const dataDOM = document.getElementById("data");
const interactions = document.getElementById("interactions")
let dataStorage = localStorage.getItem("user");
let counter = localStorage.getItem("counter")

function postData() {
  localStorage.setItem("user", JSON.stringify({name: name.value, age:age.value}))
  name.value = "";
  age.value = "";
}

function clearData() {
  localStorage.removeItem("user");
  name.value = "";
  age.value = "";
}

function interactionCount() {
  let counter = parseInt(sessionStorage.getItem('counter'))
  counter++

  sessionStorage.setItem("counter",counter);
}

//Events------------------------------------
form.addEventListener("click", (event) => {
    if (event.target.textContent == "Send") {
    postData()
    interactionCount()
  } 
  
  else if (event.target.textContent == "Clear data on BD") {
    clearData()
    interactionCount()
  }
})

//print data user --------------------------------------------------------------
if(dataStorage) {
  dataStorage = JSON.parse(dataStorage)
  
  dataDOM.innerHTML = `<p>Your data is:<br>Name: ${dataStorage.name}<br>Age: ${dataStorage.age}` 
} else {
  dataDOM.innerHTML =  '<p>Dont exist data</p>'
}
 //Print counter
if(!sessionStorage.getItem("counter")) {
  sessionStorage.setItem("counter", 0)
  interactions.innerHTML = `<p>Interactions in the page: 0`
} else {
  interactions.innerHTML =  `<p>Interactions in the page: ${sessionStorage.getItem('counter')}</p>`
} 