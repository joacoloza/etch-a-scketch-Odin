const gridContainer = document.getElementById("gridContainer");
const gridBody = document.getElementById("gridBody");
const btnElement = document.querySelector("button");

gridBody.appendChild(gridContainer);

btnElement.addEventListener('click',reset);

function createGrid (e){

    for(let row=0; row<e; row++){
        const row = gridContainer.appendChild(document.createElement('div'));  
        for(let column=0; column<e; column++){
            const box = row.appendChild(document.createElement('div'));
            box.style.width = 500 / e + "px" ;
            box.style.height = 500 / e + "px"  ;
            box.className = 'box';
        }    
    }

    gridContainer.addEventListener('mouseover',(objetive)=>{
        const hoveredSquare = objetive.target;
        hoveredSquare.style.backgroundColor = "black"
    })
}

function reset (e){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    const userInput = prompt('Choose grid size');
    if ((userInput < 1 ) || (userInput >100)){
        alert('Please choose a value between 1 and 100');
    }
    else {createGrid(userInput);}
    


}

createGrid(16);

