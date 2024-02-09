
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
containerForDisplay.appendChild(displayContainer);
displayContainer.appendChild(container)


let wantedAmount = 1028;

for (let i = 0; i < wantedAmount; i++) {
    const cloneBlock = block.cloneNode()
    cloneBlock.style.backgroundColor = 'white';
    container.appendChild(cloneBlock);
}

const blocksSelected = document.querySelectorAll(".block")
    blocksSelected.forEach(block => {
    block.addEventListener('mouseover', (e) => {
        if(e.target.style.backgroundColor === 'white') {
            e.target.style.backgroundColor = 'red'
        }
    })
});

const buttonContainer = document.createElement('div')
document.body.appendChild(buttonContainer);
const button = document.createElement('button')
button.className = "button";
button.textContent = "Pick a number!"
buttonContainer.appendChild(button)
buttonContainer.id = "BContainer"

button.addEventListener('mousedown', (e) => {

})