
const start = document.createElement('div');
document.body.appendChild(start);
let wantedAmount = 1;
const blocks = document.createElement('div') 
blocks.style.width = 200;
blocks.style.height = 200;
blocks.id = "block";
const cloneBlock = blocks.cloneNode;

let amountOfBlocks = document.querySelectorAll("block");
while (amountOfBlocks.length < wantedAmount) {
    start.appendChild(cloneBlock);

}