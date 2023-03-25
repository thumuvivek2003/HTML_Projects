var board = document.getElementById("board");

const pawn = "&#9817";
const rook = "&#9814";
const bishop = "&#9815";
const king = "&#9812";
const knight = "&#9816";
const queen = "&#9813";

function createBoard(){
    let boardContent = ""
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 1) {
                boardContent += `<div class="squareBlack square"><span class="piece id="sq${8*i+j}"></span></div>`
            }
            else boardContent += `<div class="squareWhite square"><span class="piece id="sq${8*i+j}"></span></div>`

        }
    }
    board.innerHTML = boardContent;
}

function setPawn(squares,i,j){
    if(i==1)squares[8*i+j].innerHTML = `<span class="blackPiece">${pawn}</span>`;
    if(i==6)squares[8*i+j].innerHTML = `<span class="whitePiece">${pawn}</span>`;
}
function setKing(squares,i,j){
    if(i==0 && j==4)squares[8*i+j].innerHTML = `<span class="blackPiece">${king}</span>`;
    if(i==7 && j==4)squares[8*i+j].innerHTML = `<span class="whitePiece">${king}</span>`;
}
function setRook(squares,i,j){
    if(i==0 && (j==0 || j==7))squares[8*i+j].innerHTML = `<span class="blackPiece">${rook}</span>`;
    if(i==7 && (j==0 || j==7))squares[8*i+j].innerHTML = `<span class="whitePiece">${rook}</span>`;
}

function setKnight(squares,i,j){
    if(i==0 && (j==1 || j==6))squares[8*i+j].innerHTML = `<span class="blackPiece">${knight}</span>`;
    if(i==7 && (j==1 || j==6))squares[8*i+j].innerHTML = `<span class="whitePiece">${knight}</span>`;
}

function setBishop(squares,i,j){
    if(i==0 && (j==2 || j==5))squares[8*i+j].innerHTML = `<span class="blackPiece">${bishop}</span>`;
    if(i==7 && (j==2 || j==5))squares[8*i+j].innerHTML = `<span class="whitePiece">${bishop}</span>`;
}

function setQueen(squares,i,j) {
    if(i==0 && (j==3))squares[8*i+j].innerHTML = `<span class="blackPiece">${queen}</span>`;    
    if(i==7 && (j==3))squares[8*i+j].innerHTML = `<span class="whitePiece">${queen}</span>`;    
}
function setBoard(){
    var squares = document.querySelectorAll(".square")
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            setPawn(squares,i,j);
            setKing(squares,i,j);
            setRook(squares,i,j);
            setKnight(squares,i,j);
            setBishop(squares,i,j);
            setQueen(squares,i,j);
        }
    }
}
function driver(){
    createBoard();
    setBoard();
}
driver();


// console.log(board);
selected_piece = [];
var square = document.querySelectorAll(".square");
var clicked = 0;
var temp;
var prev;
function move(i){
    i = parseInt(i);
    if(clicked==0){
        let current = square[i].childNodes[0].classList[0];
        if(square[i].innerText!="" && prev!=current){
            temp = i;
            selected_piece.push(square[i].innerText);
            square[i].classList.add("selected");
            prev = square[i].childNodes[0].classList[0];
            clicked=1;
            console.log(square[i].childNodes[0].classList[0]);
        }
    }
    else{
        if(temp!=i)
        {square[i].innerHTML = square[temp].innerHTML;
        square[temp].innerHTML = "";}
        square[temp].classList.remove("selected");
        clicked = 0;
    }
}
for(let i=0;i<square.length;i++)
{
    square[i].addEventListener("click",function(){
        move(i)
    });
};
    // console.log(square[i]);