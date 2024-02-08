
const container = document.createElement('div');
document.body.appendChild(container);
const sketchBox = document.querySelector('div')

const block = document.createElement('div') 
block.style.width = 200;
block.style.height = 200;
block.className = "block";

container.appendChild(block);


let wantedAmount = 2;

for (let i = 0; i < wantedAmount; i++) {
    const cloneBlock = block.cloneNode()
    container.appendChild(cloneBlock);
}