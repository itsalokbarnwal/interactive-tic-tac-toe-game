let boxes=document.querySelectorAll(".box");
let resBtn=document.querySelector("#reset-btn");
let newG=document.querySelector("#newG");
let msgC=document.querySelector(".msgC");
let msg=document.querySelector("#msg");


let turnO=true;

const winArr = [
    [0,1,2] , 
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] ,
    [1,4,7] ,
    [2,5,8] ,
    [0,4,8] ,
    [2,4,6] ,
] ;


const resetG = () =>{
    turnO=true;
    enableBtns();
    msgC.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disableBtns= ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBtns= ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner=(winner)=>{
    msg.innerText  = `Congratulation , Winner is ${winner}`;
    msgC.classList.remove("hide");
    disableBtns();
}

const checkwinner = () =>{
    for(let arr of winArr) {
        let pos1Val = boxes[arr[0]].innerText;
        let pos2Val = boxes[arr[1]].innerText;
        let pos3Val = boxes[arr[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}




newG.addEventListener("click" , resetG);
resBtn.addEventListener("click" , resetG);