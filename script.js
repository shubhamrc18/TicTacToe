let boxes = document.querySelectorAll(".Box");
let Resetbtn = document.querySelector("#Reset-btn");
let NewGamebtn = document.querySelector("#New-btn");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // Player O's turn first

const winPatterns = [
  [0,1,2], [0,3,6], [0,4,8],
  [1,4,7], [2,5,8], [2,4,6],
  [3,4,5], [6,7,8]
];

const resetGame = ()=>{
    turn0 = true;

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        CheckWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    MsgContainer.classList.remove("hide");
    boxes.forEach((box) => box.disabled = true);
};

const CheckWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner: " + pos1);
                showWinner(pos1);
            }
        }
    }
};
