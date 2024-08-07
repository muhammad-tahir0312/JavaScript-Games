const btn = document.getElementById("btn");
let col = window.getComputedStyle(document.body).backgroundColor;
// console.dir(h1);
// console.log(col);

btn.addEventListener("click", () => {
    if (col === "rgb(255, 255, 255)") { // white   
        document.body.style.backgroundColor = "beige";
        document.body.style.color = "black";
    } else if (col === "rgb(245, 245, 220)") { // black
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        alert("not okay");
    }
    // Update the col variable after changing the background color
    col = window.getComputedStyle(document.body).backgroundColor;
});

const div1 = document.body.querySelector("#div1");
const div2 = document.body.querySelector("#div2");
const div3 = document.body.querySelector("#div3");

const me = document.body.querySelector("#me");
const bot = document.body.querySelector("#bot");
const cont = document.body.getElementsByClassName("container2");
const message = document.createElement("h1");

message.classList.add("mesg");
cont[1].after(message);

let arr = [];
let msg, meCount=0, botCount=0;

div1.addEventListener("click",()=>{
    arr[0] = 1;
    arr[1] = 0;
    arr[2] = 0;
    console.log("rock")

    func()
})

div2.addEventListener("click",()=>{
    arr[1] = 1;
    arr[0] = 0;
    arr[2] = 0;
    console.log("paper")

    func()
})

div3.addEventListener("click",()=>{
    arr[2] = 1;
    arr[1] = 0;
    arr[0] = 0;
    console.log("scissor")

    func()
})

// rock 0 , paper 1, scissor 2
function func(){
    
    let rand = Math.floor(Math.random() * 3);
    console.log("rand= ",rand)

    if(arr[0] === 1 && rand === 2){ // rock, scissor
        msg = "Congrats, you wins";
        console.log("you wins");
        meCount++;
    }
    else if(arr[0] === 1 && rand === 1){  // rock, paper
        msg = "computer wins";
        console.log("computer wins");
        botCount++;
    }
    else if(arr[1] === 1 && rand === 0){ // paper, rock
        msg = "Congrats, you wins";
        console.log("you wins");
        meCount++;
    }
    else if(arr[1] === 1 && rand === 2){ // paper, scissor
        msg = "computer wins";
        console.log("computer wins");
        botCount++;
    }
    else if(arr[2] === 1 && rand === 0){ // scissor, rock
        msg = "computer wins";
        console.log("computer wins");
        botCount++;
    }
    else if(arr[2] === 1 && rand === 0){ // scissor, paper
        msg = "Congrats, you wins";
        console.log("you wins");
        meCount++;
    }
    else{
        msg = "draw"
        console.log("draw");
    }
    
    message.innerText = msg;
    me.innerText = meCount;
    bot.innerText = botCount;
}