const input = document.querySelector(".input");
const numbers = document.querySelectorAll('[id^="o"]');
const operators = document.querySelectorAll("div");

let msg;
numbers.forEach((a)=>{
    a.addEventListener("click",()=>{
        if(input.innerText === "Enter a number"){
            input.innerText = msg=" ";        
        }
        console.log("clicked ",a)
        msg = a.innerText;
        input.innerText += msg;
    })
})

for (let i = 16; i < 20; i++) {
    operators[i].addEventListener("click",()=>{
        msg = operators[i].innerText;
        input.innerText += msg;
    }) 
}

function calculate() {
    const expression = input.innerText;
    const result = math.evaluate(expression);
    return result;
}

operators[20].addEventListener("click",()=>{
    const res =  calculate();
    input.innerText = res;
})    

operators[21].addEventListener("click",()=>{
    input.innerText = "Enter a number";
})    
