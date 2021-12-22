// Selectors

var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const reset = document.querySelector('.reset');

for(let i=0; i<tableCell.length;i++){ 
    tableCell[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`) //check coordinate
    })
}

while(!player1){
    var player1 = prompt('Player One: Enter your name. You will be red.');
}
player1Color = 'red';

while(!player2){
    var player2 = prompt('Player Two: Enter your name. You will be yellow.');
}
player2Color = 'yellow';

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

//ensure background color of each cell is white
Array.prototype.forEach.call(tableCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = "white";
})

function changeColor(e){
    let column = e.target.cellIndex;
    let row = []; //array of '.slot'

    for(let i=5; i > -1; i--){ //check bottom row first 
        if(tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer == 1){
                row[0].style.backgroundColor = player1Color;

                if(horizontalCheck()){
                    return (alert('winner!'));
                }

                playerTurn.textContent = `${player2}'s turn!`;
                return currentPlayer = 2;
            }
            else{
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn!`;
                return currentPlayer = 1;
            }
        }
        else{ //full board

        }
    }
}

function colorMatchCheck(one, two, three, four){
    return (one == two && one == three && one == four && one != 'white')
}

function horizontalCheck(){
    for(let row=0; row < tableRow.length; row++){
        for(let col=0; col < 4; col++){
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
                tableRow[row].children[col+1].style.backgroundColor, 
                tableRow[row].children[col+2].style.backgroundColor,
                tableRow[row].children[col+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function verticalCheck(){

}

function diagonalCheck1(){

}

function diagonalCheck2(){

}