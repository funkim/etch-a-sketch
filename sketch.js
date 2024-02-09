
const container = document.createElement('div');
container.id = "container";

const block = document.createElement('div') 
block.className = "block";

const displayContainer = document.createElement('div');
displayContainer.id = "display";

document.body.appendChild(displayContainer);
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