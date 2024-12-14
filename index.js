const newDiv = document.createElement("div");
newDiv.textContent = "Hello, world!";
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

const targetDiv = document.getElementById("myDiv");
if (targetDiv) {
  targetDiv.appendChild(newParagraph);
} else {
  document.body.appendChild(newDiv);
  newDiv.appendChild(newParagraph);
}

const main = document.getElementById("main");
main.remove();

window.newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Godwin is the champion";
document.body.appendChild(newHeader);