let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner = (userWin) => {
    if(userWin){
        userscore++;
        document.querySelector("#user-score").innerText = userscore;
        console.log("you're the winner");
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        document.querySelector("#comp-score").innerText = compscore;
        console.log("you lost");
        msg.innerText = "You Lost!";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        }else if(userchoice === "scissors"){
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
const drawgame = () => {
    console.log("the game was draw");
    msg.innerText = "Its a draw";
    msg.style.backgroundColor = "black";
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});