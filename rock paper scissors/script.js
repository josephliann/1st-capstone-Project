let userScore=0;
let compsScore=0;
let users=document.querySelector("#user");
let comps=document.querySelector("#comp");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return option[idx];
}
const draw=()=>{
    console.log("draw");
};
const showwinner=(userwin)=>{
    if(userwin){
        console.log("userwon");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
        userScore++;
        users.innerText=userScore;
    }else{
        console.log("user lost");
        msg.innerText="you loose";
        msg.style.backgroundColor="red";
        compsScore++;
        comps.innerText=compsScore;
    }
};
const playgame=(userchoice)=>{
    console.log("choice was clicked",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice",compchoice);
    if(userchoice===compchoice){
        draw();
        msg.innerText="game draw : play again";
         msg.style.backgroundColor="blue";
    }else{
        let userwin=true;
        if(userchoice==="paper"){
            if(compchoice==="rock"){
                userwin=true;
            }else if(compchoice==="scissor"){
                userwin=false;
            }
        }
        else if(userchoice==="rock"){
            if(compchoice==="paper"){
                userwin=false;
            }else if(compchoice==="scissor"){
                userwin=true;
            }
        }
        else{
            if(compchoice==="rock"){
                userwin=false;
            }else if(compchoice==="paper"){
                userwin=true;
            }
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});