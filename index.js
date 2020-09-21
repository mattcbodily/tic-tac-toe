const xTiles = [],
      oTiles = [];

let xTurn = true;

const checkWinner = () => {
    if((xTiles.includes(1) && xTiles.includes(2) && xTiles.includes(3)) || (xTiles.includes(4) && xTiles.includes(5) && xTiles.includes(6)) || (xTiles.includes(7) && xTiles.includes(8) && xTiles.includes(9)) || (xTiles.includes(1) && xTiles.includes(4) && xTiles.includes(7)) || (xTiles.includes(2) && xTiles.includes(5) && xTiles.includes(8)) || (xTiles.includes(3) && xTiles.includes(6) && xTiles.includes(9)) || (xTiles.includes(1) && xTiles.includes(5) && xTiles.includes(9)) || (xTiles.includes(3) && xTiles.includes(5) && xTiles.includes(7))){
        alert('X Wins')
    } else if((oTiles.includes(1) && oTiles.includes(2) && oTiles.includes(3)) || (oTiles.includes(4) && oTiles.includes(5) && oTiles.includes(6)) || (oTiles.includes(7) && oTiles.includes(8) && oTiles.includes(9)) || (oTiles.includes(1) && oTiles.includes(4) && oTiles.includes(7)) || (oTiles.includes(2) && oTiles.includes(5) && oTiles.includes(8)) || (oTiles.includes(3) && oTiles.includes(6) && oTiles.includes(9)) || (oTiles.includes(1) && oTiles.includes(5) && oTiles.includes(9)) || (oTiles.includes(3) && oTiles.includes(5) && oTiles.includes(7))){
        alert('O Wins')
    }
}

const selectTile = (id) => {
    const tile = document.getElementById(`${id}`);

    if(xTurn){
        tile.innerText = 'X';
        xTiles.push(id);
    } else {
        tile.innerText = 'O';
        oTiles.push(id);
    }
    
    checkWinner()
    xTurn = !xTurn;
}