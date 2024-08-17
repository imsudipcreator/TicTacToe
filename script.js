let btn=document.querySelectorAll('.btn');
let rstBtn=document.querySelector('.rst-btn');
let newBtn =document.querySelector('.new-btn');
let msgWinner =document.querySelector('.msg-container');
let msg =document.querySelector('p');


let turnO =true;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


const resetGame =()=>{
    turnO =true;
    enableBtns();
    msgWinner.classList.add('hide');
}


newBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);
// rstBtn.onclick=resetGame();

btn.forEach((btns)=> {
    btns.addEventListener("click",()=>{
        if (turnO){
            btns.innerText="O";
            turnO=false;
        }else{
            btns.innerText="X";
            turnO=true;
        }
        btns.disabled=true;

        checkWinner();
      

      
    })
})

const disableBtns =()=>{
    for(let btns of btn){
        btns.disabled=true;
    }
}
const enableBtns =()=>{
    for(let btns of btn){
        btns.disabled=false;
        btns.innerText="";
    }
}

const checkWinner = ()=>{
    for ( let pattern of winPatterns) {
 let pos1Val=btn[pattern[0]].innerText;
 let pos2Val=btn[pattern[1]].innerText;
 let pos3Val=btn[pattern[2]].innerText;

 if(pos1Val !== "" &&  pos2Val !== "" && pos3Val !== "" ){
if(pos1Val === pos2Val  &&  pos2Val === pos3Val){
    winnerPage(pos1Val);
}
 }
    }
};
let winnerPage =(winner)=>{
msg.innerText=`Congratulations! Winner is ${winner}`;
msgWinner.classList.remove('hide');
disableBtns();
}



let switchPallete = document.querySelector(".mode");
switchPallete.onclick=function(){
    document.body.classList.toggle("color-palette");
}
