
const container = document.createElement('div');
container.id = "container";

const block = document.createElement('div') 
block.className = "block";

const displayContainer = document.createElement('div');
displayContainer.id = "display";

document.body.appendChild(displayContainer);
displayContainer.appendChild(container)
container.appendChild(block);


let wantedAmount = 256;

for (let i = 0; i < wantedAmount; i++) {
    const cloneBlock = block.cloneNode()
    container.appendChild(cloneBlock);
}
