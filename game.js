let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector(".new-btn");
let resetbtn=document.querySelector(".reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,6,4],
];
const resetgame= () => {
    turnO=true;
    enabledbtns();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
                box.innerText="X"
                turnO=true;
            }
            box.disabled = true;

            checkWinner();
    });
});

const disabledbtns= () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbtns= () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner)  => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
}


const checkWinner= () => {
    for(let pattern of winPatterns){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""
        ){
        if(pos1val==pos2val&& pos2val==pos3val){
            showWinner(pos1val);
        }
        }
}
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
