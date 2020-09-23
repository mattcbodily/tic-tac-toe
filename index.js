let xTiles = [],
    oTiles = [],
    xTurn = true,
    winScenarios = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
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
    if(xTurn){
        for(let i = 0; i < winScenarios.length; i++){
            if(JSON.stringify(winScenarios[i]) === JSON.stringify(xTiles)){
                turnDisplay.innerText = '';
                turnDisplay.style.display = 'none';
                alert('X Wins');
                xScore++;
                xScoreNode.innerText = `X Wins: ${xScore}`;
            }
        }
    } else {
        for(let i = 0; i < winScenarios.length; i++){
            if(JSON.stringify(winScenarios[i]) === JSON.stringify(oTiles)){
                turnDisplay.innerText = '';
                turnDisplay.style.display = 'none';
                alert('O Wins');
                oScore++;
                oScoreNode.innerText = `O Wins: ${oScore}`;
            }
        }
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