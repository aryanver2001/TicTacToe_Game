let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let turns = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        turns++;
        drawMatch();
    })
})

const drawMatch = () =>{
    if(turns == 9 ){
        msg.innerText = "it's a draw! \n play again"
        msgContainer.classList.remove("hide");
    }
}

const resetGame = () => {
    turnO = true;
    turns = 0;
    enableBtns();
    msgContainer.classList.add("hide");
}

const diableBtns = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! \n ${winner} wins..`
    msgContainer.classList.remove("hide");
    diableBtns();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click" ,resetGame);
newBtn.addEventListener("click" , resetGame);