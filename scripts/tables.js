const container = document.getElementById("container");

container.style.marginTop = "30px";
container.style.justifyContent = "center";

const btn = document.createElement("button");
btn.textContent = "Hello there";
btn.style.backgroundColor = "White";
btn.style.border = "1px solid black";
btn.style.padding = "10px";


const para = document.getElementById("para");
container.appendChild(btn);
container.removeChild(para)

// const element = document.getElementsByTagName("p");
// console.log(element);

// container.innerHTML = "<h1>This is heading inside div.container</h1>";





//container.innerText = "This is just a container";