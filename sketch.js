
const container = document.createElement('div');
document.body.appendChild(container);
const sketchBox = document.querySelector('div')
container.id = "container";

const block = document.createElement('div') 
block.className = "block";

container.appendChild(block);


let wantedAmount = 2;

for (let i = 0; i < wantedAmount; i++) {
    const cloneBlock = block.cloneNode()
    container.appendChild(cloneBlock);
}