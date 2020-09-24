let xTiles = [],
    oTiles = [],
    selectedTiles = [],
    xTurn = true,
    pvp = true,
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
    selectedTiles = [];
    xTurn = true;
    winnerDisplay.innerText = '';
    winnerDisplay.style.display = 'none';
    turnDisplay.innerText = "X's Turn";
    turnDisplay.style.display = 'initial';
}

const checkWinner = () => {
    if(xTurn){
        for(let i = 0; i < winScenarios.length; i++){
            if(xTiles.sort((a, b) => a - b).join().includes(winScenarios[i].join())){
                turnDisplay.innerText = '';
                turnDisplay.style.display = 'none';
                alert('X Wins');
                xScore++;
                xScoreNode.innerText = `X Wins: ${xScore}`;
                return;
            }
        }

        if(selectedTiles.length === 9){
            alert("Cat's Scratch");
            return;
        }
    } else if(!xTurn) {
        for(let i = 0; i < winScenarios.length; i++){
            if(oTiles.sort((a, b) => a - b).join().includes(winScenarios[i].join())){
                turnDisplay.innerText = '';
                turnDisplay.style.display = 'none';
                alert('O Wins');
                oScore++;
                oScoreNode.innerText = `O Wins: ${oScore}`;
                return;
            }
        }

        if(selectedTiles.length === 9){
            alert("Cat's Scratch");
            return;
        }
    }
}

const computerTileSelect = () => {
    let num = Math.ceil(Math.random() * 9);
    if(!xTiles.includes(num) && !oTiles.includes(num)){
        let tile = document.getElementById(`${num}`);
        tile.innerText = 'O';
        oTiles.push(num);
        selectedTiles.push(num);
        turnDisplay.innerText = "X's Turn";
        checkWinner();
        xTurn = !xTurn;
    } else {
        computerTileSelect()
    }
}

const selectTile = (id) => {
    const tile = document.getElementById(`${id}`);

    if(xTurn){
        if(!xTiles.includes(id) && !oTiles.includes(id)){
            tile.innerText = 'X';
            xTiles.push(id);
            selectedTiles.push(id);
            turnDisplay.innerText = "O's Turn";
            checkWinner();
            xTurn = !xTurn;
            if(!pvp){
                setTimeout(() => {
                    computerTileSelect()
                }, 1000)
            }
        }
    } else if(!xTurn && pvp){
        if(!xTiles.includes(id) && !oTiles.includes(id)){
            tile.innerText = 'O';
            oTiles.push(id);
            selectedTiles.push(id);
            turnDisplay.innerText = "X's Turn";
            checkWinner();
            xTurn = !xTurn;
        }
    }
    
    // xTurn = !xTurn;
}

const toggleComputerPlayer = (bool) => {
    pvp = bool;
}