/**
 * Created by yohanes on 8.9.2016 г..
 */
var painted;
var content;
var winningCombos;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//instanciate arrays
window.onload = function() {
    painted = new Array();
    content = new Array();
    winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(var i = 0; i <= 8; i++){
        painted[i] = false;
        content[i]='';
    }
}

//Game methods
function canvasClicked(canvasNumber) {
    theCanvas = "canvas" + canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");

    if(painted[canvasNumber - 1] == false){
        if(turn%2==0){
            cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(40,40);
            cxt.moveTo(40,10);
            cxt.lineTo(10,40);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'X';
        }

        else{
            cxt.beginPath();
            cxt.arc(25,25,20,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'O';
        }

        turn++;
        painted[canvasNumber - 1] = true;
        squaresFilled++;
        checkForWinner(content[canvasNumber - 1]);

        if(squaresFilled==9){
            alert("Game Over!");
            location.reload(true);
        }
    }
    else{
        alert("That space is already occupied!")
    }
}

function checkForWinner(symbol) {
    for(var i = 0; i < winningCombos.length;i++){
        if(content[winningCombos[i][0]] == symbol && content[winningCombos[i][1]] == symbol &&
            content[winningCombos[i][2]] == symbol){
            alert(symbol + " WON!");
            playAgain();
        }
    }
}

function playAgain() {
    y=confirm("Play Again?");
    if(y==true){
        alert("Okay! ^^/>");
        location.reload(true);
    }
    else{
        alert("Bye!")
    }
}
