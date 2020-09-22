let xTiles = [],
    oTiles = [],
    xTurn = true
    xScore = 0,
    oScore = 0;

const xScoreNode = document.getElementById('x-score'),
      oScoreNode = document.getElementById('o-score'),
      winnerDisplay = document.getElementById('winner-display'),
      turnDisplay = document.getElementById('turn-display');

xScoreNode.innerText = `X Wins: ${xScore}`;
oScoreNode.innerText = `O Wins: ${oScore}`;
turnDisplay.innerText = xTurn ? "X's Turn" : "Y's Turn";
winnerDisplay.style.display = 'none';

const clearBoard = () => {
    for(let i = 1; i < 10; i++){
        let tile = document.getElementById(i);
        tile.innerText = ''
    }

    xTiles = [];
    oTiles = [];
    xTurn = true;
    winnerDisplay.innerText = '';
    winnerDisplay.style.display = 'none';
    turnDisplay.innerText = "X's Turn";
    turnDisplay.style.display = 'initial';
}

const checkWinner = () => {
    if((xTiles.includes(1) && xTiles.includes(2) && xTiles.includes(3)) || (xTiles.includes(4) && xTiles.includes(5) && xTiles.includes(6)) || (xTiles.includes(7) && xTiles.includes(8) && xTiles.includes(9)) || (xTiles.includes(1) && xTiles.includes(4) && xTiles.includes(7)) || (xTiles.includes(2) && xTiles.includes(5) && xTiles.includes(8)) || (xTiles.includes(3) && xTiles.includes(6) && xTiles.includes(9)) || (xTiles.includes(1) && xTiles.includes(5) && xTiles.includes(9)) || (xTiles.includes(3) && xTiles.includes(5) && xTiles.includes(7))){
        turnDisplay.innerText = '';
        turnDisplay.style.display = 'none';
        // winnerDisplay.innerText = 'X Wins'
        // winnerDisplay.style.display = 'initial';
        alert('X Wins');
        xScore++;
        xScoreNode.innerText = `X Wins: ${xScore}`;
        // clearBoard();
    } else if((oTiles.includes(1) && oTiles.includes(2) && oTiles.includes(3)) || (oTiles.includes(4) && oTiles.includes(5) && oTiles.includes(6)) || (oTiles.includes(7) && oTiles.includes(8) && oTiles.includes(9)) || (oTiles.includes(1) && oTiles.includes(4) && oTiles.includes(7)) || (oTiles.includes(2) && oTiles.includes(5) && oTiles.includes(8)) || (oTiles.includes(3) && oTiles.includes(6) && oTiles.includes(9)) || (oTiles.includes(1) && oTiles.includes(5) && oTiles.includes(9)) || (oTiles.includes(3) && oTiles.includes(5) && oTiles.includes(7))){
        turnDisplay.innerText = '';
        turnDisplay.style.display = 'none';
        // winnerDisplay.innerText = 'O Wins'
        // winnerDisplay.style.display = 'initial';
        alert('O Wins');
        oScore++;
        oScoreNode.innerText = `O Wins: ${oScore}`;
        // clearBoard();
    }
}

const selectTile = (id) => {
    const tile = document.getElementById(`${id}`);

    if(xTurn){
        if(!xTiles.includes(id) && !oTiles.includes(id)){
            tile.innerText = 'X';
            xTiles.push(id);
            turnDisplay.innerText = "O's Turn";
            checkWinner();
        }
    } else {
        if(!xTiles.includes(id) && !oTiles.includes(id)){
            tile.innerText = 'O';
            oTiles.push(id);
            turnDisplay.innerText = "X's Turn";
            checkWinner();
        }
    }
    
    xTurn = !xTurn;
}