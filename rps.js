let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#comp");
const genCompChoice=()=>{
    const  options=["rock","paper","scissor"];
    const ran=Math.floor( Math.random()*3);
    return options[ran];
}

const draw=()=>
    {
        console.log("ggame was draw");
        msg.innerText="game was draw ";
        msg.style.backgroundColor="#081b31";
    }
    
const show=(userwin,userChoice,compChoice)=>{
    if(userwin === true){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win !!!";
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="you lose!!!" ;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>
    {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if (userChoice===compChoice)
        {
                draw();
        }
        else {
            let userwin=true;
            if(userChoice ==="rock")
                {
                    userwin=compChoice ==="paper"?false:true;
                }
                else if(userChoice ==="paper")
                    {
                        userwin = compChoice ==="sccissors"?false:true;
                    }
                else{
                    compChoice ==="rock"?false:true;
                }
                show(userwin,userChoice,compChoice); 
        }
               
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});