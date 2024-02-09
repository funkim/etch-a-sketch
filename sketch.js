
const container = document.createElement('div');
container.id = "container";

const block = document.createElement('div') 
block.className = "block";

const displayContainer = document.createElement('div');
displayContainer.id = "display";

const containerForDisplay = document.createElement('div');
document.body.appendChild(containerForDisplay);
containerForDisplay.appendChild(displayContainer)
containerForDisplay.id = "DDContainer"
displayContainer.appendChild(container)


let wantedAmount = 1028;
function duplicateClones() {
for (let i = 0; i < wantedAmount; i++) {
    const cloneBlock = block.cloneNode()
    cloneBlock.style.backgroundColor = 'white';
    container.appendChild(cloneBlock);
}
}
function applyHover() {
const blocksSelected = document.querySelectorAll(".block")
    blocksSelected.forEach(block => {
    block.addEventListener('mouseover', (e) => {
        if(e.target.style.backgroundColor === 'white') {
            e.target.style.backgroundColor = 'red'
        }
    })
});
}
const buttonContainer = document.createElement('div')
document.body.appendChild(buttonContainer);
const button = document.createElement('button')
button.className = "button";
button.textContent = "Pick a number!"
buttonContainer.appendChild(button)
buttonContainer.id = "BContainer"

document.addEventListener('DOMContentLoaded',() => {
button.addEventListener('mousedown', (e) => {
    const userInput = prompt("Choose a number (lower than 500) to create a new graph with a new size!")
    if (userInput) {
        const inputNumber = parseInt(userInput, 10)
        if (!isNaN(inputNumber)) {
    container.innerHTML = '';
    console.log(userInput)
    wantedAmount = userInput*userInput
    block.style.backgroundColor = 'white'
    duplicateClones();
    applyHover();
    return wantedAmount
}else {
    alert("hey buddy input a number");
}
    }
});

})
